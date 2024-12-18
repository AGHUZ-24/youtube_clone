const mongoose = require('mongoose');
const Video = require('../models/Video');

// Fetch video details and increment views
const getVideoDetails = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the video by ID and increment the views field
    const video = await Video.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } }, // Increment the views by 1
      { new: true } // Return the updated document
    );

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

  // Upload Video Controller
const uploadVideo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const videoUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    // Create a new video document
    const newVideo = new Video({
      title,
      description,
      videoUrl,
      thumbnailUrl: 'https://via.placeholder.com/300', // Placeholder thumbnail
    });

    await newVideo.save();

    res.status(201).json({ message: 'Video uploaded successfully', video: newVideo });
  } catch (error) {
    console.error('Error uploading video:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// Add a comment to a video
const addComment = async (req, res) => {
  const { username, text } = req.body;
  const { id } = req.params;

  try {
    const video = await Video.findById(id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    const newComment = { username, text };
    video.comments.push(newComment);

    await video.save();
    res.status(201).json({ message: 'Comment added successfully', comment: newComment });
  } catch (error) {
    console.error('Error adding comment:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fetch comments for a video
const getComments = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findById(id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.status(200).json(video.comments);
  } catch (error) {
    console.error('Error fetching comments:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Like a video
const likeVideo = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } }, // Increment the likes by 1
      { new: true }
    );

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.status(200).json({ message: 'Video liked successfully', likes: video.likes });
  } catch (error) {
    console.error('Error liking video:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Dislike a video
const dislikeVideo = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findByIdAndUpdate(
      id,
      { $inc: { likes: -1 } }, // Decrement the likes by 1
      { new: true }
    );

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.status(200).json({ message: 'Video disliked successfully', likes: video.likes });
  } catch (error) {
    console.error('Error disliking video:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = { uploadVideo,getVideoDetails,getTrendingVideos, addComment, getComments, likeVideo, dislikeVideo }; // Correct export
