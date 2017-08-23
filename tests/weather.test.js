/* eslint no-undef: off, no-invalid-this:off */
const assert = require('chai').assert;
const weatherReq = require('./requests/weather.requests.js')
const database = require('../wrappers/database');

describe('weather integration tests', function () {
  this.timeout(15000);
  const id = 1283240;
  const keyWord = 'z';

  describe('GET cities list', () => {
    beforeEach(() => database.drop()
      .then(() => database.initialize()));

    it('when get cities list should return the list of the cities', () => weatherReq.list(keyWord)
      .then((res) => {
        const city = res.body.cities[0];

        assert.notEqual(city.id, undefined);
        assert.notEqual(city.name, undefined);
        assert.notEqual(city.country, undefined);
      })
    );
  });

  describe('GET city weather', () => {
    it('when get city should return the weather params', () => weatherReq.get(id)
      .then((res) => {
        const city = res.body;

        assert.notEqual(city.time, undefined);
        assert.notEqual(city.humidity, undefined);
        assert.notEqual(city.weather, undefined);
        assert.notEqual(city.temperature, undefined);
      })
    );
  });
});
