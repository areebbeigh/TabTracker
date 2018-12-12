const express = require('express')
const router = express.Router()

const UserController = require('../controllers/userController')
const UserValidator = require('../validators/userValidator')

router.post('/register', UserValidator.register, UserController.register_post)

module.exports = router
