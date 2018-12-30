const {
  sequelize,
  User,
  Song,
  Bookmark
} = require('../src/models')

const users = require('./users')
const songs = require('./songs')
const bookmarks = require('./bookmarks')

async function seed () {
  if (process.env.NODE_ENV === 'production') {
    users[0].password = process.env.seedPassword1
    users[1].password = process.env.seedPassword2
  }

  await sequelize.sync({ force: true })

  await Promise.all(users.map(user => {
    return User.create(user)
  }))

  await Promise.all(songs.map(song => {
    return Song.create(song)
  }))

  await Promise.all(bookmarks.map(bookmark => {
    return Bookmark.create(bookmark)
  }))
}

seed()
