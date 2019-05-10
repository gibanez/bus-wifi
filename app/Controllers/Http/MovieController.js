'use strict'
const ApiController = use('App/Controllers/Http/ApiController')

class MovieController extends ApiController {
  static get inject () {
    return ['App/Services/MovieService']
  }
}

module.exports = MovieController
