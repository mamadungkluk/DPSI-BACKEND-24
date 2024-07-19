const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.post('/content', adminController.createContent);
router.put('/content/:id', adminController.updateContent);
router.get('/dashboard', adminController.getDashboard);

module.exports = router;
