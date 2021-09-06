const { body } = require('express-validator');

const register = () => [
  body('email').isEmail().withMessage('The email address is not in the correct format.'),
  body('password')
    .not().isEmpty().withMessage('You must provide a password.')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long.'),
  body('firstname').not().isEmpty().withMessage('You must provide a first name.'),
  body('lastname').not().isEmpty().withMessage('You must provide a last name.'),
];

module.exports = {
  register,
};
