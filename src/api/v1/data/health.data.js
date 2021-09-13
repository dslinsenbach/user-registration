const db = require('../helpers/database');

const checkDatabaseStatus = () => new Promise((resolve, reject) => {
  const sql = 'SELECT 1 AS connected';

  db.query(sql, (err, result) => {
    if (err) reject(err.sqlMessage);

    resolve(result);
  });
});

const queryUsers = () => new Promise((resolve, reject) => {
  const sql = 'SELECT id, email, phone FROM users LIMIT 1';

  db.query(sql, (err, result) => {
    if (err) reject(err.sqlMessage);

    resolve(result);
  });
});

module.exports = {
  checkDatabaseStatus,
  queryUsers,
};