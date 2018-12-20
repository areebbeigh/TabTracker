const { Song } = require('../models')

module.exports = {
  async index (req, res) {
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
  },

  async show (req, res) {
    try {
      const song = await Song.findById(req.params.id)

      if (!song) {
        return res.status(404).send({
          error: 'Song not found'
        })
      }

      res.send(song)
    } catch (err) {
      res.status(500).send({
        err
      })
    }
  }
}
