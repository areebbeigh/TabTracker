const express = require('express')
const router = express.Router()

const isAuthenticated = require('../middleware/isAuthenticated')
const hasBookmarkOwnership = require('../middleware/hasBookmarkOwnership')
const BookmarksController = require('../controllers/BookmarksController')

router.get('/', isAuthenticated, BookmarksController.index)
router.post('/', isAuthenticated, BookmarksController.create)
router.get('/:id', isAuthenticated, BookmarksController.show)
router.delete('/:id', isAuthenticated, hasBookmarkOwnership, BookmarksController.delete)

module.exports = router
