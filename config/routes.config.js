const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');
const users = require('../controllers/users.controller');

router.get('/', homeController.home);

router.get('/users', users.list);
router.get('/users', users.create);
router.get('/users/:id', users.detail);
router.get('/users/:id/update', users.update);
router.get('/users/:id/delete', users.delete);

module.exports = router;