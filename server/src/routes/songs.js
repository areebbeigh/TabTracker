const express = require('express')
const router = express.Router()

const isAuthenticated = require('../middleware/isAuthenticated')
const hasSongOwnership = require('../middleware/hasSongOwnership')
const SongsController = require('../controllers/SongsController')

router.get('/', SongsController.index)
router.post('/', isAuthenticated, SongsController.create)
router.put('/', isAuthenticated, hasSongOwnership, SongsController.update)
router.delete('/:id', isAuthenticated, hasSongOwnership, SongsController.delete)
router.get('/:id', SongsController.show)

module.exports = router
