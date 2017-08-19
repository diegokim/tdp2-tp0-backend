const InitialDBManager = require('../dbManager/initialDBManager');


module.exports.use = () => {
  const newInitial = new InitialDBManager();

  return InitialDBManager.create(newInitial)
    .then(() => InitialDBManager.use());
};
