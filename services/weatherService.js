/* eslint-disable */
module.exports.get = (cityId) => {
  return Promise.resolve({
    id: 1851632,
    name: 'Shuzenji',
    temperature: 289.5,
    pressure: 1013,
    humidity: 89,
    weather: 'clouds'
  })
};

module.exports.list = () => {
  return Promise.resolve([{
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
  }])
};