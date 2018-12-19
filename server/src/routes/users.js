const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const UserValidator = require('../validators/userValidator')

router.post('/register', UserValidator.register, AuthController.register_post)
router.post('/login', AuthController.login_post)

module.exports = router
