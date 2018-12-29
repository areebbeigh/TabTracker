// A blacklist of valid jwt tokens to keep track of when user manually logs out
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('InvalidToken', {
    token: DataTypes.STRING
  })
}
