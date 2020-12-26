const Router = require('koa-router')
const passport = require('koa-passport')
const getMovies = require('../controllers/movies/getMovies')
const getMovie = require('../controllers/movies/getMovie')
const createMovie = require('../controllers/movies/createMovie')
const updateMovie = require('../controllers/movies/updateMovie')
const deleteMovie = require('../controllers/movies/deleteMovie')

const router = new Router();
const BASE_URL = `/api/movies`

router.get(BASE_URL, passport.authenticate('jwt', { session: false }), getMovies)
router.get(`${BASE_URL}/:id`, getMovie)
router.post(`${BASE_URL}`, createMovie)
router.put(`${BASE_URL}/:id`, updateMovie)
router.delete(`${BASE_URL}/:id`, deleteMovie)


module.exports = router
