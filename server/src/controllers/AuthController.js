const passport = require('passport')

const { User, InvalidToken } = require('../models')
const config = require('../config/config')

module.exports = {
  async register_post (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user)
    } catch (err) {
      res.status(400).send({
        error: 'That user already exists!'
      })
    }
  },

  async login_post (req, res, next) {
    passport.authenticate('local', (err, user) => {
      if (err) {
        return res.status(400).send({
          error: err.message
        })
      }
      req.login(user, (err) => {
        if (err) {
          return res.status(500).send({
            error: 'An internal server error occured'
          })
        }
        res.send({ user })
      })
    })(req, res, next)
  },

  logout (req, res) {
    req.logout()
    res.send(null)
  },

  user (req, res) {
    if (req.isAuthenticated()) {
      return res.send({
        isLoggedIn: true,
        user: req.user
      })
    }

    res.send({
      isLoggedIn: false,
      user: null
    })
  }
}
