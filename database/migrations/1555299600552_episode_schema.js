'use strict'

const Schema = use('Schema')

class EpisodeSchema extends Schema {
  up () {
    this.create('episodes', (table) => {
      table.increments();
      table.integer('serie_id').unsigned().references('id').inTable('series');
      table.integer('source_id').unsigned().references('id').inTable('sources');
      table.integer('season');
      table.string('name', 100).notNullable().unique().index();
      table.string('image', 100).notNullable();
      table.text('description');
      table.timestamps()
    })
  }

  down () {
    this.drop('episodes')
  }
}

module.exports = EpisodeSchema
