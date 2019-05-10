'use strict'

const Database = use('Database')
const ModelService = use('App/Services/ModelService')

class ProductService extends ModelService {

  static get inject () {
    return ['App/Models/Movie']
  }

  tableName () {
    return 'movies'
  }

  getRelations() {
    return [];
  }

}

module.exports = ProductService
