const { User } = require('../models')

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
  }
}
