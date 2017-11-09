const knex = require('../db/connection')

function getIndex() {
  return knex('movies')
}

function getMovie(id) {
  return knex('movies')
    .where({ id })
    .first()
}

function createMovie(title, director, year, star_rating, poster_url) {
  return knex('movies')
    .insert({ title, director, year, star_rating, poster_url })
    .returning('created_at')
}

function updateMovie(id, title, director, year, star_rating, poster_url) {
  return knex('movies')
    .where({ id })
    .update({ title, director, year, star_rating, poster_url, thisKeyIsSkipped: undefined })
    .returning(['title', 'updated_at'])
}

function deleteMovie(id) {
  return knex('movies')
    .where({ id })
    .del()
}

function movieExists(id) {
  return knex('movies')
    .select('id')
    .where({ id })
    .first()
}

module.exports = {
  getIndex,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  movieExists
}