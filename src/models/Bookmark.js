module.exports = function (sequelize, DataTypes) {
  const Bookmark = sequelize.define('Bookmark', {})

  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.Song, { onDelete: 'CASCADE' })
    Bookmark.belongsTo(models.User)
  }

  return Bookmark
}
