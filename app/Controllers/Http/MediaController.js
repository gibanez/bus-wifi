'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');
const ApiController = use('App/Controllers/Http/ApiController')

class MediaController extends ApiController {
  static get inject () {
    return ['App/Services/MediaService']
  }
  async sync({ request, response, params }) {
    
    const { folder }  =  request.only('folder')
    let text = null;
    if ( folder ) {
        const buff = Buffer.from(folder, 'base64');  
        text = buff.toString('ascii');
        
    }
    console.info(text || Env.get('PATH_MEDIA'));
    console.info(__dirname);
    return await this.service.getFolder(text || Env.get('PATH_MEDIA'));
  }
}

module.exports = MediaController;