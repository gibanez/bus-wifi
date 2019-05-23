
'use strict'
const ApiController = use('App/Controllers/Http/ApiController')

class MediaController extends ApiController {
  static get inject () {
    return ['App/Services/MediaService']
  }
}

module.exports = MediaController;