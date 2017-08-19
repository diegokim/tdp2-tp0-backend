const mongoose = require('mongoose')

//  Activity Schema
const InitialSchema = mongoose.Schema({
  initial: {
    type: String
  }
})

// eslint-disable-next-line
const Initial = module.exports = mongoose.model('Initial', InitialSchema)

module.exports.create = function (initial) {
  return initial.save();
}

module.exports.use = function () {
  return {};
}
