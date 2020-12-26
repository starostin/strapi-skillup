const Router = require('koa-router')
const passport = require('koa-passport');
const registration = require('../controllers/user/regitration')
const login = require('../controllers/user/login')
const getUser = require('../controllers/user/getUser')

const router = new Router();

router.post(`/api/registration`, passport.authenticate('registration', { session: false }), registration)
router.post(`/api/login`,  passport.authenticate('login', { session: false }), login)
router.get(`/api/user`, passport.authenticate('jwt', { session: false }), getUser)


module.exports = router
