const request = require('superagent');
const baseUrl = require('./config.requests.js').baseUrl

module.exports.list = () => Promise.resolve(
  request.get(baseUrl + '/cities')
    .set({'content-type': 'application/json'})
    .send()
);

module.exports.get = (id) => Promise.resolve(
  request.get(baseUrl + '/cities/' + id)
    .set({'content-type': 'application/json'})
    .send()
);
