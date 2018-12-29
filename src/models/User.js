const bcrypt = require('bcrypt')

function hashPassword (user, options) {
  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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

  User.associate = function (models) {
    User.hasMany(models.Song)
  }

  User.prototype.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

  return User
}
