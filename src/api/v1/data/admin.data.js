const db = require('../helpers/database');

const getUsers = () => new Promise((resolve, reject) => {
  const sql = 'SELECT id,firstname,lastname,email,created FROM users';

  db.query(sql, (err, result) => {
    if (err) reject(err.sqlMessage);

    resolve(result);
  });
});

const getUserDetails = (id) => new Promise((resolve, reject) => {
  const sql = 'SELECT id, email, firstname, lastname, phone, created FROM users WHERE id = ?';

  db.query(sql, id, (err, result) => {
    if (err) reject(err.sqlMessage);

    resolve(result);
  });
});

module.exports = {
  getUsers,
  getUserDetails,
};
