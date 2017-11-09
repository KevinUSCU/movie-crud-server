const movie = require('./model')

function getIndex(req, res, next) {
  movie.getIndex()
    .then(result => res.json(result))
}

function getMovie(req, res, next) {
  movie.getMovie(req.params.id)
    .then(result => res.json(result))
}

function createMovie(req, res, next) {
  const { title, director, year, star_rating, poster_url } = req.body
  if (!title) return next({ status: 400, error: `Error 400: Who's on first? This movie needs a title to continue!` })
  movie.createMovie(title, director, year, star_rating, poster_url)
    .then(result => res.status(201).json(`'${title}' was added on ${result[0]}.`))
}

function updateMovie(req, res, next) {
  const { title, director, year, star_rating, poster_url } = req.body
  movie.updateMovie(req.params.id, title, director, year, star_rating, poster_url)
    .then(result => res.status(202).json(`'${result[0].title}' was updated on ${result[0].updated_at}.`))
}

function deleteMovie(req, res, next) {
  movie.deleteMovie(req.params.id)
    .then(result => res.status(204).send())
}

function movieExists(req, res, next) {
  movie.movieExists(req.params.id)
    .then (result => {
      if (result) return next()
      else return next({ status: 404, error: 'Error 404: Houston, we have a problem; that movie does not exist.' })
    })
}

module.exports = {
  getIndex,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  movieExists
}