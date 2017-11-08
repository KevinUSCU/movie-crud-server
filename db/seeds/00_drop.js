exports.seed = function(knex, Promise) {
  // Drop all tables in reverse FK order
  return knex('movies').del()
}