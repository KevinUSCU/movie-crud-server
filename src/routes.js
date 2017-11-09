const express = require('express')
const router = express.Router()
const ctrl = require('./controllers')

router.get('/', ctrl.getIndex)
router.get('/:id', ctrl.movieExists, ctrl.getMovie)
router.post('/', ctrl.createMovie)
router.put('/:id', ctrl.movieExists, ctrl.updateMovie)
router.delete('/:id', ctrl.deleteMovie)

module.exports = router