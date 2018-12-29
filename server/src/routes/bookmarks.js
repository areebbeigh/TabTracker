const express = require('express')
const router = express.Router()

const isAuthenticated = require('../middleware/isAuthenticated')
const BookmarksController = require('../controllers/BookmarksController')

router.get('/', isAuthenticated, BookmarksController.index)
router.post('/', BookmarksController.create)
router.get('/:id', BookmarksController.show)
router.delete('/:id', BookmarksController.delete)

module.exports = router
