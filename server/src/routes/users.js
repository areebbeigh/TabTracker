const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const UserValidator = require('../middleware/validators/userValidator')

router.post('/register', UserValidator.register, AuthController.register_post)
router.post('/login', AuthController.login_post)
router.get('/logout', AuthController.logout)
router.get('/user', AuthController.user)

module.exports = router
