'use strict'

const Schema = use('Schema')

class SourceSchema extends Schema {
  up () {
    this.create('sources', (table) => {
      table.increments();
      table.string('src', 100).notNullable().unique().index();
      table.string('type', 100).notNullable();
      table.integer('duration');
      table.timestamps();
    })
  }

  down () {
    this.drop('sources')
  }
}

module.exports = SourceSchema
