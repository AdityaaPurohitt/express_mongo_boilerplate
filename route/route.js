const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

// If you want to add middleware for jwt authentication use this variable
const authenticateJWT = require('../middleware/jwt.auth');

router.post('/user/register', userController.registerUser);

module.exports = router;
