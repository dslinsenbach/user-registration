const { registrationService } = require('../services');
const response = require('../helpers/response');

const register = async (req, res) => {
  try {
    const user = await registrationService.register(
      req.body.email,
      req.body.password,
      req.body.firstname,
      req.body.lastname, req.body.phone,
    );

    response.sendSuccess(res, user);
  } catch (err) {
    response.sendError(res, err);
  }
};

module.exports = {
  register,
};
