const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');
const users = require('../controllers/users.controller');

router.get('/', homeController.home);

router.get('/users', users.list);

router.get('/users/new', users.create);
router.post('/users', users.doCreate);

router.get('/users/:id', users.detail);
router.post('/users/:id/update', users.update);
router.post('/users/:id/delete', users.delete);

module.exports = router;