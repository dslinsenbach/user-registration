const { param } = require('express-validator');

const getUsers = () => [];

const getUserDetails = () => [
  param('id').not().isEmpty().withMessage('You must provide a user identifier'),
];

module.exports = {
  getUsers,
  getUserDetails,
};
