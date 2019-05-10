'use strict'

const Schema = use('Schema')

class SerieSchema extends Schema {
  up () {
    this.create('series', (table) => {
      table.increments();
      table.string('name', 100).notNullable().unique().index();
      table.string('image', 100).notNullable();
      table.text('description');
      table.timestamps();
    })
  }

  down () {
    this.drop('series')
  }
}

module.exports = SerieSchema
