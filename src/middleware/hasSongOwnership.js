const { Song } = require('../models')

module.exports = async function (req, res, next) {
  try {
    const songId = req.body.id || req.params.id || null
    if (!songId) {
      res.status(400).send({ error: 'Invalid request' })
    }
    const song = await Song.findById(songId)
    if (song.UserId === req.user.id) {
      next(null, req, res)
    } else {
      res.status(401).send({
        error: 'Unauthorized acess.'
      })
    }
  } catch (err) {

  }
}
