const request = require('superagent');
const baseUrl = require('./config.requests.js').baseUrl

module.exports.list = (keyWord) => Promise.resolve(
  request.post(baseUrl + '/cities')
    .set({'content-type': 'application/json'})
    .send({ keyWord })
);

module.exports.get = (id) => Promise.resolve(
  request.get(baseUrl + '/cities/' + id)
    .set({'content-type': 'application/json'})
    .send()
);
