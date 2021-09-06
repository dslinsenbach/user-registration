const router = require('express').Router();

const { viewsController } = require('../controllers');

router.get('/', viewsController.getHome);
router.get('/admin/users', viewsController.getUsers);

module.exports = router;
