const router = require('express').Router();

const { adminValidator, validate } = require('../validators');
const { adminController } = require('../controllers');

router.get('/users', adminValidator.getUsers(), validate, adminController.getUsers);
router.get('/users/:id', adminValidator.getUserDetails(), validate, adminController.getUserDetails);

module.exports = router;
