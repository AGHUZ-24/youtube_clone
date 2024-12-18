const express = require('express');
const multer = require('multer');
const { addComment, getComments, getTrendingVideos, uploadVideo, getVideoDetails } = require('../controllers/videoController');

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Videos will be saved in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

const upload = multer({ storage });

// Route to upload a video
router.post('/upload', upload.single('video'), uploadVideo);
router.get('/trending', getTrendingVideos); // Route for trending videos
router.get('/:id', getVideoDetails); // Video details route
router.post('/:id/comments', addComment); // Add a comment to a video
router.get('/:id/comments', getComments); // Fetch comments for a video

module.exports = router;
