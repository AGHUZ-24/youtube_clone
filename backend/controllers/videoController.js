const mongoose = require('mongoose');
const Video = require('../models/Video');

// Controller to fetch video details
const getVideoDetails = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid video ID format' });
    }

    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.status(200).json(video);
  } catch (error) {
    console.error('Error fetching video details:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getTrendingVideos = async (req, res) => {
    try {
      // Fetch all videos sorted by views descending
      const videos = await Video.find().sort({ views: -1 });
      res.status(200).json(videos);
    } catch (error) {
      console.error('Error fetching trending videos:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = { getVideoDetails,getTrendingVideos }; // Correct export
