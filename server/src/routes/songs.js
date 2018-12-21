const express = require('express')
const router = express.Router()

const SongsController = require('../controllers/SongsController')
// const UserValidator = require('../validators/userValidator')

router.get('/', SongsController.index)
router.post('/', SongsController.create)
router.put('/', SongsController.update)
router.get('/:id', SongsController.show)

module.exports = router
