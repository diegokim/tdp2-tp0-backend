const request = require('superagent');
const APIKey = '1622fa28634e72f4f8ba637f459e3272';

module.exports.get = (cityId) => Promise.resolve(
  request.get(`api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${APIKey}`)
    .set({'content-type': 'application/json'})
    .send()
);
