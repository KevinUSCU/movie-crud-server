
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments()
    table.string('title').notNullable().defaultTo('')
    table.string('director').notNullable().defaultTo('')
    table.integer('year').notNullable().defaultTo(0)
    table.integer('star_rating').notNullable().defaultTo(0)
    table.string('poster_url').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
}
