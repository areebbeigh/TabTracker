const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    let userSchema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}')
      )
    }

    Joi.validate(req.body, userSchema, (err, value) => {
      if (err) {
        if (err.isJoi) {
          switch (err.details[0].context.key) {
            case 'email':
              res.status(400).send({
                error: 'Invalid email address.'
              })
              break
            case 'password':
              res.status(400).send({
                error: 'Invalid password.'
              })
              break
            default:
              res.status(400).send({
                error: 'Invalid user information.'
              })
          }
        }
      } else {
        next()
      }
    })
  }
}
