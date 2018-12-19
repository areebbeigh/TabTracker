const { Song } = require('../models')

module.exports = {
  async show (req, res) {
    const songs = await Song.findAll({ where: {} })
    res.send(songs)
  },

  async create (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(400).send({
        // TODO: Send actual errror
        err
      })
    }
  }
}
