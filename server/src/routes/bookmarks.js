const express = require('express')
const router = express.Router()

const BookmarksController = require('../controllers/BookmarksController')

router.get('/', BookmarksController.index)
router.post('/', BookmarksController.create)
router.get('/:id', BookmarksController.show)
router.delete('/:id', BookmarksController.delete)

module.exports = router
