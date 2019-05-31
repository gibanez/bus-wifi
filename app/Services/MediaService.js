'use strict'
const fs = require('fs');
const path = require('path');
const Helpers = use('Helpers');
const Route = use('Route')
const Env = use('Env');
const ModelService = use('App/Services/ModelService')
//const ModelService = use('App/Services/ModelService')

class MediaService extends ModelService {
  static get inject() {
     return ['App/Models/Media', 'App/Services/CryptService', 'App/Services/FileSystemService']
  }
  constructor(model, cryptService, fileSystemService) {
    super(model);
    this.cryptService = cryptService;
    this.fileSystemService = fileSystemService;
  }

  getRelations() {
    return [];
  }

  tableName() {
    return 'media'
  }

  getFolder(pathFolder) {

    return new Promise((resolve, reject) => {
      const pathFolderAbsolute = fs.realpathSync(pathFolder);
      fs.readdir(pathFolderAbsolute, (err, items) => {
        if (err) return reject();
        const data = items
          .filter(this.filterDirectory)
          .map(this.formatFolder(pathFolderAbsolute));
          resolve(data);
      });
    });
  }

  filterDirectory(folder) {
    try {
      var stats = fs.statSync(path.join(Env.get('PATH_MEDIA'), folder));
      return stats.isDirectory();
    } catch (e) {
      return false;
    }
  }

  formatFolder(pathFolderAbsolute) {
    // console.info(response)
    return (folder) => {
      const folderPath = path.join(pathFolderAbsolute, folder);
      const images = this.getImages(folderPath);
      const folderHash = this.cryptService.encrypt(folderPath)
      return {
        name: folder,
        key: folderHash,
        images
      }
    };
  }

  getLinkImages(images, folderPath) {
    return images.map((item) => {
      return Env.get('APP_URL') + Route.url('media.image', {folder: folderPath, image: item.key});
    });
  }

  getImages(folder) {
    const files = fs.readdirSync(folder);
    return files.filter((image) => {
      const pathFile = path.join(folder, image);
      return path.extname(pathFile) == '.jpg';
    }).map((image) => {
       const pathFile = path.join(folder, image);
       const key = this.cryptService.encrypt(image);
        return {
          name: image,
          key,
          link: Env.get('APP_URL') + Route.url('media.image', { folder: this.cryptService.encrypt(folder), image: key})
        }
      }
    );

  }

  isFile(pathItem) {
    return !!path.extname(pathItem);
  }

  async getImageData(folder, image) {

    let f = this.cryptService.decrypt(folder);
    let i = this.cryptService.decrypt(image);
    const folderPath = [f, i].join('/');

    return new Promise((resolve, reject) => {
      const data = fs.readFileSync(folderPath);
      resolve(data);
    });
  }

  getMediaMovies() {
    return this.fileSystemService.getDirectories(Env.get('PATH_MEDIA')).map(dir => {
        return this.fileSystemService.getFiles(dir.realPath).filter(file => {
          return ['avi', 'mp4'].includes(file.extension);
        }).map(file => {
          return {
            name: dir.basename,
            file,
            hashPath: this.cryptService.encrypt(file.realPath)
          }
        }).shift();
      });
  }
}

module.exports = MediaService
