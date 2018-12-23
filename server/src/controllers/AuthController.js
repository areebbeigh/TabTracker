const jwt = require('jsonwebtoken')

const { User } = require('../models')
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

  async login_post (req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      res.status(403).send({
        error: 'Invalid login information.'
      })
    } else {
      if (user.isValidPassword(password)) {
        const userJson = user.toJSON()
        const token = jwt.sign(userJson, config.jwtSecret, { expiresIn: '1d' })
        res.send({
          user: userJson,
          token
        })
      } else {
        res.status(403).send({
          error: 'Invalid login information.'
        })
      }
    }
  }
}
