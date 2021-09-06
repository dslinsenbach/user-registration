const db = require('../helpers/database');

const register = (email, password, firstname, lastname, phone) => new Promise((resolve, reject) => {
  const params = [email, password, firstname, lastname, phone];

  db.exec('UserRegistration', params, (err, result) => {
    if (err) reject(err);

    resolve(result);
  });
});

module.exports = {
  register,
};
