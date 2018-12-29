const express = require('express')
const router = express.Router()

const hasSongOwnership = require('../middleware/hasSongOwnership')
const SongsController = require('../controllers/SongsController')

router.get('/', SongsController.index)
router.post('/', SongsController.create)
router.put('/', hasSongOwnership, SongsController.update)
router.delete('/:id', hasSongOwnership, SongsController.delete)
router.get('/:id', SongsController.show)

module.exports = router
