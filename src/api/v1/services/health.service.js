const { healthData } = require('../data');

const checkStatus = () => {
  return 'Hello!';
};

const checkDatabaseStatus = async () => {
  const result = await healthData.checkDatabaseStatus();

  if (!result || !result[0] || !result[0].connected) throw new Error('Could not establish connection to the database.');

  return true;
};

const queryUsers = async () => {
  return await healthData.queryUsers();
};

module.exports = {
  checkStatus,
  checkDatabaseStatus,
  queryUsers,
};