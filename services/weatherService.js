const _ = require('lodash');
const weatherClient = require('../client/weatherClient');
const citiesDB = require('../dbManager/citiesDB');

module.exports.get = (cityId) => weatherClient.get(cityId)
  .then((res) => {
    const city = res.body;
    const timeZone = Math.trunc(parseFloat(city.coord.lon) / 15);
    const newDate = new Date();
    const time = (newDate.getUTCHours() + timeZone) % 24;

    const weather = {
      time,
      temperature: Math.round(city.main.temp - 273.15),
      humidity: city.main.humidity,
      weather: city.weather[0].main.toLowerCase()
    }
    return weather;
  })
  .catch((err) => Promise.reject({ status: err.cod, message: err.message }));

module.exports.list = (keyWord) => citiesDB.get(keyWord)
  .then((citiesEntry) => citiesEntry.value)
  .then((cities) => _.sortBy(cities, 'name'))
  .catch(() => Promise.reject({ status: 404, message: 'Error while getting cities' }))
