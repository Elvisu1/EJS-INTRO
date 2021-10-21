const express = require('express');
const pagesController = require('../../controllers/pagesControllers');

const router = express.Router();

// GET / - home page
router.get('/', pagesController.pagesIndex);

module.exports = router;
