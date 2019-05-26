'use strict'

const Database = use('Database')
const Event = use('Event')

class ModelService {

  constructor (model) {
    this.model = model;
    this.db = Database.from(this.tableName());
  }

  getRelations() {
    return []
  }

  async findAll(page = 1, limit = 10, filters = {}) {
    const qb = this.model.query()
    this.setRelations(qb);
    this.setFilters(qb, filters)

    return await qb.paginate(page, limit);
  }

  setFilters(qb, filters) {

    delete filters.page;
    Object.keys( filters ).forEach( field => {
      let value = filters[field];
      Object.keys( value ).forEach( condition => {
        this.setCondition(qb, field, condition, value[condition])
      })
    });
  }

  setCondition(qb, field, condition, value) {
    switch (condition) {
      case 'eq':      qb.where(field, value); break;
      case 'neq':     qb.whereNot(field, value); break;
      case 'in':      qb.whereIn(field, value.split(',')); break;
      case 'nin':     qb.whereNotIn(field, value.split(',')); break;
      case 'null':    qb.whereNull(field); break;
      case 'nnull':   qb.whereNotNull(field); break;
      case 'bet':     qb.whereBetween(field, value.split(',')); break;
      case 'contain': qb.where(field, 'LIKE', '%'+value+'%'); break;
      case 'start':   qb.where(field, 'LIKE', '%'+value); break;
      case 'end':     qb.where(field, 'LIKE', value+'%'); break;
    }
  }

  setRelations(qb) {
    const relations = this.getRelations();
    if(relations.length){
      relations.forEach((rel) => {
        qb.with(rel)
      })
    }
  }

  async doSave(data) {
    let model = null
    if (data.id) {
      model = await this.model.find(data.id)
      delete data.id
    } else {
      model = new this.model()
    }

    Event.fire('model::before-save', data)
    model.merge(data)
    await model.save()
    return model

  }

  async find(id) {

    const qb = this.model.query()
    this.setRelations(qb);
    qb.where('id', id)
    return await qb.first();
  }
}

module.exports = ModelService
