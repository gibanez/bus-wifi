'use strict'

class ApiController {
  constructor (service) {
    this.service = service
  }

  async index ({request, params}) {

    const {page} = request.all();
    const data = request.all();

    Object.keys(params).forEach(key => {
      data[key] = {eq:params[key]}
    })

    return await this.service.findAll(page, 10, data)
  }

  async store({request}) {
    return await this.service.doSave(request.all())
  }

  async update({request, params, auth}) {
    const {id} = params
    const data = Object.assign(request.all(), params);

    //data.user_id = auth.user.id
    //console.info(this.service.model.user_id);
    return await this.service.doSave(data)
  }

  async show({params}) {
    const {id} = params

    return this.service.find(id)
  }
}

module.exports = ApiController
