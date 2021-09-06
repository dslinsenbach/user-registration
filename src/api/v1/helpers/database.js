const mysql = require('mysql');
const logger = require('./logging');

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
};

const pool = mysql.createPool(config);

exports.exec = (procedure, params, cb) => {
  let paramsPlaceholder = '';

  params.forEach(() => {
    paramsPlaceholder += paramsPlaceholder.length > 0 ? ',?' : '?';
  });

  const stmt = `CALL ${procedure}(${paramsPlaceholder})`;

  logger.info(stmt);
  logger.info(params);

  pool.query(stmt, params, (err, result) => {
    if (err) {
      err.sqlStatement = stmt;
      err.sqlParams = params;
    }

    cb(err, result);
  });
};

exports.query = (stmt, params, cb) => {
  pool.query(stmt, params, (err, result) => {
    cb(err, result);
  });
};

// module.exports = pool;
