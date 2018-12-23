/* eslint-disable */

const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    let songs = {}
    if (req.query.search) {
      const query = req.query.search
      songs = await Song.findAll({
        where: {
          $or: ['title', 'album', 'artist', 'genre', 'lyrics'].map(attr => {
            return {
              [attr]: {
                $like: `%${query}%`
              }
            }
          })
        }
      })
    } else {
      songs = await Song.findAll({ where: {} })
    }
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

  async update (req, res) {
    try {
      const song = await Song.update(req.body, { where: { id: req.body.id } })
      res.send(song)
    } catch (err) {
      res.status(500).send({
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
