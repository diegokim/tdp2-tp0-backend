/* eslint no-undef: off */
const assert = require('chai').assert;
const wheatherReq = require('./requests/wheather.requests.js')

describe('Wheather integration tests', () => {
  const id = 'id';

  const expectedCities = [{
    id: 1283240,
    name: 'Kathmandu',
    country: 'NP'
  },
  {
    id: 703363,
    name: 'Laspi',
    country: 'UA'
  },
  {
    id: 3632308,
    name: 'Merida',
    country: 'VE'
  },
  {
    id: 473537,
    name: 'Vinogradovo',
    country: 'RU'
  },
  {
    id: 384848,
    name: 'Qarah Gawl al ‘Ulyā',
    country: 'IQ'
  },
  {
    id: 569143,
    name: 'Cherkizovo',
    country: 'RU'
  },
  {
    id: 713514,
    name: 'Alupka',
    country: 'UA'
  },
  {
    id: 2878044,
    name: 'Lichtenrade',
    country: 'DE'
  }];

  describe('GET cities list', () => {
    it('when get cities list should return the list of the cities', () => wheatherReq.list()
      .then((res) => {
        const cities = res.body;
        assert.deepEqual(cities, expectedCities)
      })
    );
  });

  describe('GET city wheather', () => {
    it('when get city should return the wheather params', () => wheatherReq.get(id)
      .then((res) => {
        const city = res.body;

        assert.notEqual(city.id, undefined);
        assert.notEqual(city.name, undefined);
        assert.notEqual(city.pressure, undefined);
        assert.notEqual(city.humidity, undefined);
        assert.notEqual(city.wheather, undefined);
        assert.notEqual(city.temperature, undefined);
      })
    );
  });
});
