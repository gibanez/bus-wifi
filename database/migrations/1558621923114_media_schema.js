'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MediaSchema extends Schema {
  up () {
    this.create('media', (table) => {
      table.increments();
      table.string('name', 100).notNullable();
      table.string('type', 100).notNullable();
      table.integer('duration');
      table.string('hash', 100).notNullable().unique().index();
      table.timestamps();
    })
  }

  down () {
    this.drop('media')
  }
}

module.exports = MediaSchema
