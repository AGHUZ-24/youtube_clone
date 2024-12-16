const Video = require('../models/Video');

// Fetch trending videos
const getTrendingVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ views: -1 }).limit(10);
    res.status(200).json(videos);
  } catch (error) {
    console.error('Error fetching trending videos:', error);
    res.status(500).json({ error: 'Failed to fetch trending videos' });
  }
};

module.exports = { getTrendingVideos }; // Ensure functions are exported correctly
