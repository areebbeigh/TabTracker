const bcrypt = require('bcrypt')

function hashPassword (user, options) {
  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeSave: hashPassword
    }
  })

  User.prototype.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

  return User
}
