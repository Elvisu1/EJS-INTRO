const express = require('express');
const pagesController = require('../../controllers/pagesControllers');

const router = express.Router();

// GET / - home page
router.get('/', pagesController.pagesIndex);
router.get('/about', pagesController.pagesAbout);
router.get('/contact', pagesController.pagesContact);
router.get('/layout', pagesController.pagesLayout);

module.exports = router;
