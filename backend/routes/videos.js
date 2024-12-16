const express = require('express');
const { getTrendingVideos } = require('../controllers/videoController');

const router = express.Router();

// Define routes
router.get('/trending', getTrendingVideos);

module.exports = router; // Ensure you are exporting the router
