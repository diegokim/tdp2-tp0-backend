const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const configDB = require('./database')

module.exports = function (passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:    configDB.secret
  }

  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    done(null, {})
  }))
}
