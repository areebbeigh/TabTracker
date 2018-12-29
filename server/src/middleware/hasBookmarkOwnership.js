const { Bookmark } = require('../models')

module.exports = async function (req, res, next) {
  try {
    const bookmarkId = req.body.id || req.params.id || null
    if (!bookmarkId) {
      res.status(400).send({ error: 'Invalid request' })
    }
    const bookmark = await Bookmark.findById(bookmarkId)
    if (bookmark.UserId === req.user.id) {
      next(null, req, res)
    } else {
      res.status(401).send({
        error: 'Unauthorized acess.'
      })
    }
  } catch (err) {

  }
}
