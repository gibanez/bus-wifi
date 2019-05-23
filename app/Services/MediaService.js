'use strict'
const fs = require('fs');
const path = require('path');
const Database = use('Database');
const Env = use('Env');
const ModelService = use('App/Services/ModelService')
class MediaService extends ModelService {
  static get inject () {
    return ['App/Models/Media']
  }
  getRelations() {
    return [];
  }
  tableName () {
    return 'media'
  }

  getFolder(pathFolder) {

    return new Promise((resolve, reject) => {
        const pathFolderAbsolute = fs.realpathSync(pathFolder);
        console.info(pathFolderAbsolute);
        fs.readdir(pathFolderAbsolute, (err, items) => {
          console.info(err)
           if (err) return reject();
           console.table(items);
            const data = items
                .filter(this.filterDirectory)
                .map(this.formatFolder(pathFolderAbsolute))

           resolve(data);
        });
    });
}

filterDirectory (folder) {
  console.info('FOLDER:' + folder);
    try {
        var stats = fs.statSync(path.join(Env.get('PATH_MEDIA'), folder));
        return stats.isDirectory();
    } catch (e) {
        return false;
    }
}

formatFolder(pathFolderAbsolute) {
    return (folder) => {
        const folderPath = path.join(pathFolderAbsolute, folder);
        return {
            name: folder,
            key: Buffer.from(folderPath).toString('base64'),
            images: this.getImages(folderPath) 
        }
    };
}

getImages(folder) {

    const files = fs.readdirSync(folder);
    return files.filter((image) => {
        const pathFile = path.join(folder, image);
        return path.extname(pathFile) == '.jpg';

    }).map((image) => {

        const pathFile = path.join(folder, image);
        //var bitmap = fs.readFileSync(pathFile);
        // convert binary data to base64 encoded string
        return {
            //data: new Buffer(bitmap).toString('base64'),
            name: image,
            key: new Buffer(image).toString('base64')
        }
    }

    );

}

isFile(pathItem) {
    return !!path.extname(pathItem);
  }

}
module.exports = MediaService