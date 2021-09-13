const { healthService } = require('../services');
const response = require('../helpers/response');

const checkStatus = (req, res) => {
  const msg = healthService.checkStatus();

  response.sendSuccess(res, msg);
};

const checkDatabaseStatus = async (req, res) => {
  try {
    const connectionEstablished = await healthService.checkDatabaseStatus();

    if (connectionEstablished) response.sendSuccess(res, 'Database is online');
  } catch (err) {
    response.sendError(res, err, 500);
  }
};

const queryUsers = async (req, res) => {
  const result = await healthService.queryUsers();

  response.sendSuccess(res, result);
};

module.exports = {
  checkStatus,
  checkDatabaseStatus,
  queryUsers,
};