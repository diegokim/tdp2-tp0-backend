const weatherService = require('../services/weatherService');
const aux = require('../utils/auxiliar.functions.js')

module.exports.get = (req, res) => {
  const cityId = req.params.cityId;

  return cityId === undefined ?
  aux.onError('Get city', res, { status: 400, message: 'Missing city param'}) :
  weatherService.get(cityId)
	  .then((completeCity) => res.status(200).json(completeCity))
  	.catch((err) => aux.onError('Get city', res, err))
}

module.exports.list = (req, res) => {
  const keyWord = req.body.keyWord;

  return keyWord === undefined ?
  aux.onError('Get cities', res, { status: 400, message: 'Missing keyWord param'}) :
  weatherService.list(keyWord)
	  .then((cities) => res.status(200).json(cities))
  	.catch((err) => aux.onError('List cities', res, err))
}

