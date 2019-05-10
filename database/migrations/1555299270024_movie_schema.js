'use strict'

const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.integer('source_id').unsigned().references('id').inTable('sources');
      table.string('name', 100).notNullable().unique().index();
      table.string('image', 100).notNullable();
      table.text('description');
      table.integer('year');
      table.integer('views');
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MovieSchema
