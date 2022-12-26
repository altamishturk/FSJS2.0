const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

// Login a user
router.post('/login', userController.login);

// Logout a user
router.get('/logout', userController.logout);

module.exports = router;