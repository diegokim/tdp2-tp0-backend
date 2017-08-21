const _ = require('lodash');
const mongoose = require('mongoose');
const cities = require('../city.list.json')
const CitiesDB = require('../dbManager/citiesDB')

//  Uris for production and test environment
//  Usar variables de ambiente es mas seguro
const PRODUCTION_URI = process.env.PRODUCTION_URI || 'mongodb://127.0.0.1:27017/production';
const TEST_URI = process.env.TEST_URI || 'mongodb://127.0.0.1:27017/test';

//  Variable that holds the state of the database
const state = {
  'db':  null,
  'uri': null
};

//  Get the environment Test or Production from a environment variable
const env = process.env.ENV;

exports.ENV_TEST = 'env_test';
exports.ENV_PRODUCTION = 'env_production';

//  Connect to the database
module.exports.connect = function () {
  if (state.db) {
    return;
  }

  return new Promise((resolve, reject) => {
    state.uri = env === this.ENV_TEST ? TEST_URI : PRODUCTION_URI;
    mongoose.Promise = global.Promise;
    //  Database connection
    state.db = mongoose.connect(state.uri);
    //  On connection
    mongoose.connection.on('connected', () => {
      console.log('youre now connected to the database ' + state.uri);
      resolve();
    });
    //  On Error
    mongoose.connection.on('error', (err) => {
      console.log(err);
      reject(err);
    });
  });

};

//  Delete database
module.exports.drop = function () {
  if (state.db) {
    return state.db.connection.db.dropDatabase();
  }
  return Promise.reject('Cant drop database')
};

// Initialize database
module.exports.initialize = function () {
  const parsedCities = {};

  cities.forEach((city) => {
    const keyWord = city.name[0] ? city.name[0].toLowerCase() : city.name[0];
    const parsedCity = _.pick(city, ['id', 'name', 'country']);

    if (parsedCities[keyWord]) {
      parsedCities[keyWord].push(parsedCity);
    } else {
      parsedCities[keyWord] = [parsedCity];
    }
  });

  const promises = [];
  Object.keys(parsedCities).forEach((key) => {
    const newCitiesEntry = new CitiesDB({ key, value: parsedCities[key] });
    promises.push(CitiesDB.create(newCitiesEntry))
  });

  return Promise.all(promises)
    .then(() => console.log('All cities has been migrated sucessful'));    
}
