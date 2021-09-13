const router = require('express').Router();

const { healthController } = require('../controllers');

// Return status of API
router.get('/status', healthController.checkStatus);

// Check database connectivity
router.get('/db/status', healthController.checkDatabaseStatus);

// Query database
router.get('/db/query', healthController.queryUsers);

module.exports = router;
