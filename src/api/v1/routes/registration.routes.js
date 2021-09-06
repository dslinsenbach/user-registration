const router = require('express').Router();

const { registrationValidator, validate } = require('../validators');
const { registrationController } = require('../controllers');

router.post('/', registrationValidator.register(), validate, registrationController.register);

module.exports = router;
