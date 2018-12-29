
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const { User } = require('./models')
const config = require('./config/config')

module.exports = function (app) {
  passport.use(new LocalStrategy({ usernameField: 'email' },
    async function (email, password, done) {
      try {
        const user = await User.findOne({ where: { email } })

        if (!user) {
          return done(new Error('User does not exist'), false)
        }

        if (user.isValidPassword(password)) {
          return done(null, user)
        } else {
          throw new Error('Invalid password')
        }
      } catch (err) {
        return done(err, false)
      }
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id)
      done(null, user)
    } catch (err) {
      done(err, false)
    }
  })

  app.use(passport.initialize())
  app.use(passport.session())
}
