const { Bookmark, Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      if (req.query.all && req.query.all !== '0') {
        const bookmarks = await Bookmark.findAll()
        res.send(bookmarks)
      } else {
        const userId = req.user.id
        const { songId } = req.query
        const where = {}

        if (songId) {
          where.SongId = songId
        }

        const bookmarks = await Bookmark.findAll({
          where,
          include: [{ model: Song }]
        })

        res.send(bookmarks)
      }
    } catch (err) {
      console.log('error!', err)
      res.send({
        error: err.toString()
      })
    }
  },

  async create (req, res) {
    try {
      const [ bookmark, created ] = await Bookmark.findOrCreate({
        where: {
          UserId: req.body.userId,
          SongId: req.body.songId
        }
      })
      if (!created) {
        return res.status(400).send({
          error: 'That bookmark already exists.'
        })
      }

      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        err
      })
    }
  },

  async delete (req, res) {
    try {
      console.log(req.params.id)
      const destroyed = await Bookmark.destroy({
        where: {
          id: req.params.id
        }
      })

      if (!destroyed) {
        return res.status(404).send({
          error: 'Bookmark does not exist'
        })
      }

      res.send({ destroyed })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        err
      })
    }
  },

  async show (req, res) {
    try {
      const bookmark = await Bookmark.findById(req.params.id)

      if (!bookmark) {
        return res.status(404).send({
          error: 'Bookmark not found'
        })
      }

      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        err
      })
    }
  }
}
