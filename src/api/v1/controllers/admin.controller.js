const { adminService } = require('../services');
const response = require('../helpers/response');

const getUsers = async (req, res) => {
  try {
    const users = await adminService.getUsers();

    response.sendSuccess(res, users);
  } catch (err) {
    response.sendError(res, err);
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await adminService.getUserDetails(req.params.id);

    response.sendSuccess(res, user);
  } catch (err) {
    response.sendError(res, err);
  }
};

module.exports = {
  getUsers,
  getUserDetails,
};
