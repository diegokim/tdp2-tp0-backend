const express = require('express');
const passport = require('passport');
const router = express.Router();
const initialController = require('../controllers/initialController');

//  Get initial
router.get('/initial', passport.authenticate('jwt', {'session': false}), (req, res) => initialController.use(req, res));


module.exports = router;
