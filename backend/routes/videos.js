const express = require('express');
const { getVideoDetails, getTrendingVideos } = require('../controllers/videoController');

const router = express.Router();


router.get('/trending', getTrendingVideos); // Route for trending videos
router.get('/:id', getVideoDetails);        // Route for video details


module.exports = router;
