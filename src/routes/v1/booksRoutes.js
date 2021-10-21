const express = require('express');
const booksController = require('../../controllers/booksControllers');

const router = express.Router();

// GET /books/ - get all books
router.get('/', booksController.booksIndex);

// GET /books/new - show form to add new book
router.get('/new', booksController.booksShowForm);

// POST /books/new - process the form
router.post('/new', booksController.booksNewBook);

module.exports = router;
