const { validationResult } = require('express-validator');

const registrationValidator = require('./registration.validator');
const adminValidator = require('./admin.validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];

  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(400).json({
    success: false,
    message: 'One or more parameters had invalid data or were missing.',
    errors: extractedErrors,
  });
};

module.exports = {
  registrationValidator,
  adminValidator,
  validate,
};
