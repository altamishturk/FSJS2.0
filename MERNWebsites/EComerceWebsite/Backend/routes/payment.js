const express = require('express');
const router = express.Router();

const {makePaymentThroughStripe} = require('../controllers/payment');
const {isLoggedIn} = require("../middlewares/auth");

// Get all users
router.post('/stripe', isLoggedIn,makePaymentThroughStripe);

module.exports = router;