const {
  sequelize,
  User,
  Song
} = require('../src/models')

const users = require('./users')
const songs = require('./songs')

async function seed () {
  await sequelize.sync({ force: true })

  await Promise.all(users.map(user => {
    return User.create(user)
  }))

  await Promise.all(songs.map(song => {
    return Song.create(song)
  }))
}

seed()
