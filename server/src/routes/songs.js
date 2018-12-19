const express = require('express')
const router = express.Router()

const SongsController = require('../controllers/SongsController')
// const UserValidator = require('../validators/userValidator')

router.get('/', SongsController.show)
router.post('/', SongsController.create)

module.exports = router
