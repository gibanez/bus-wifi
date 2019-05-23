
'use strict'
const Database = use('Database')
const ModelService = use('App/Services/ModelService')
class MediaService extends ModelService {
  static get inject () {
    return ['App/Models/Media']
  }
  getRelations() {
    return [];
  }
}
module.exports = MediaService