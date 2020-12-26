const passport = require('koa-passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const queries = require('../db/queries/user')

passport.use(
    'registration',
    new LocalStrategy(
        {
          usernameField: 'username',
          passwordField: 'password'
        },
        async (username, password, done) => {
          try {
            const user = await queries.addUser({
              username,
              password: await bcrypt.hash(password, 10)
            });

            return done(null, user[0]);
          } catch (error) {
            done(error);
          }
        }
    )
);


passport.use(
    'login',
    new LocalStrategy(
        {
          usernameField: 'username',
          passwordField: 'password'
        },
        async (username, password, done) => {
          try {
            const user = await queries.getUserByUsername(username);

            if (!user.length) {
              return done(null, false, { message: 'User not found' });
            }

            const validate = await bcrypt.compare(password, user[0].password);

            if (!validate) {
              return done(null, false, { message: 'Wrong Password' });
            }

            return done(null, user[0], { message: 'Logged in Successfully' });
          } catch (error) {
            return done(error);
          }
        }
    )
);

passport.use(
    new JWTstrategy(
        {
          secretOrKey: 'TOP_SECRET',
          jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
        },
        async (token, done) => {
          try {
            return done(null, token.user);
          } catch (error) {
            done(error);
          }
        }
    )
);
