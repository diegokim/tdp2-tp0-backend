const express = require('express');
const router = express.Router();
const wheatherController = require('../controllers/wheatherController');

//  Get cities
router.get('/cities', (req, res) => wheatherController.list(req, res));

//  Get city status
router.get('/cities/:cityId', (req, res) => wheatherController.get(req, res));

module.exports = router;
