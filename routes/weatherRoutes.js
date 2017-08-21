const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

//  Get cities
router.get('/cities', (req, res) => weatherController.list(req, res));

//  Get city status
router.get('/cities/:cityId', (req, res) => weatherController.get(req, res));

module.exports = router;
