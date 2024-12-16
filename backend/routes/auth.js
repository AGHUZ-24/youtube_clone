const express = require('express');
const { signup } = require('../controllers/authController'); // Import the signup function

const router = express.Router();

// Define the signup route
router.post('/signup', signup);

module.exports = router; // Ensure the router is exported correctly
