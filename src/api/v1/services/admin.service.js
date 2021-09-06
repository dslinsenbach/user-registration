const { adminData } = require('../data');

const getUsers = async () => {
  const users = await adminData.getUsers();

  return users;
};

const getUserDetails = async (id) => {
  const user = await adminData.getUserDetails(id);

  return user[0];
};

module.exports = {
  getUsers,
  getUserDetails,
};
