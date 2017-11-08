
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('movies', table => {
    table.increments()
    table.string('title').notNullable().defaultTo('')
    table.string('director')
    table.integer('year')
    table.integer('star_rating')
    table.string('poster_url')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
}
