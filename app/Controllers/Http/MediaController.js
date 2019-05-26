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
    return await this.service.getFolder(text || Env.get('PATH_MEDIA'));
  }

  async image({request, response, params}) {
    const {folder, image} = params;
    response.header('Content-type', 'image/jpeg');
    const data = await this.service.getImageData(folder, image);
    return response.send(data);
    // this.service.getImageData(folder, image).then((data) => {
    //   console.info(data)
    //   return response.send(data);
    // }).catch((e) => {
    //   console.info(e);
    //   return {error:e}
    // });

    //return []
  }
}

module.exports = MediaController;
