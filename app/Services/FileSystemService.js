'use strict';
const fs = require('fs');
const path = require('path');
const Cryptr = require('cryptr');
const Env = use('Env');
class FileSystemService {
  constructor() {}
  getDirectories(folder) {
       const pathFolderAbsolute = fs.realpathSync(folder);
       const directories = fs.readdirSync(pathFolderAbsolute);
       return directories.map(dir => {
         return {
           basename: dir,
           path: folder,
           realPath: path.join(folder, dir)
         }
       });
  }
  getFiles(folder) {
    const pathFolderAbsolute = fs.realpathSync(folder);
    const files = fs.readdirSync(pathFolderAbsolute);
    //console.info(files);
    return files.filter(file => {
      return this.isFile(path.join(folder, file));
    }).map(file => {
      const realPath = path.join(folder, file);
      return {
        basename: file,
        realPath,
        extension: path.extname(realPath).slice( 1 )
      }
    });
  }
  isFile(pathItem) {
    return !!path.extname(pathItem);
  }
}

module.exports = FileSystemService
