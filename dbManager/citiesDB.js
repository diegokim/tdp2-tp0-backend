const mongoose = require('mongoose')

//  City Schema
const CitiesSchema = mongoose.Schema({
  key: {
    type: String
  },
  value: {
    type: Array
  }
})

// eslint-disable-next-line
const Cities = module.exports = mongoose.model('Cities', CitiesSchema)

module.exports.create = function (cities) {
  return cities.save();
}

module.exports.get = function (key) {
  const query = { key };
  return Cities.findOne(query);
}
