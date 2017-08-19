const mongoose = require('mongoose')

//  User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nacimiento: {
    type: String,
    required: true
  }
})

// eslint-disable-next-line
const User = module.exports = mongoose.model('User', UserSchema)

module.exports.getUserByUsername = function (username) {
  const query = {username: username}
  return User.findOne(query)
}
