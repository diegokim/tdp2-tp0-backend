const initialService = require('../services/initialService');

module.exports.use = (req, res) => initialService.use()
	  .then((response) => res.status(201).json(response))
  	.catch((err) => aux.onError('Initial use', res, err));
