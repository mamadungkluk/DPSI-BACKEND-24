const express = require('express');
const visitorController = require('../controllers/visitorController');
const router = express.Router();

router.get('/navigation', visitorController.getNavigation);
router.get('/search', visitorController.searchContent);

module.exports = router;
