const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Video = require('./models/Video');

// Load environment variables
dotenv.config();

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Dummy video data
const videos = [
  {
    title: 'Sample Video 1',
    description: 'This is the first sample video.',
    thumbnailUrl: 'https://via.placeholder.com/300',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    views: 1234,
    likes: 200,
  },
  {
    title: 'Sample Video 2',
    description: 'This is the second sample video.',
    thumbnailUrl: 'https://via.placeholder.com/300',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    views: 5678,
    likes: 450,
  },
  {
    title: 'Sample Video 3',
    description: 'This is the third sample video.',
    thumbnailUrl: 'https://via.placeholder.com/300',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    views: 7890,
    likes: 500,
  },
];

// Seed function
const seedVideos = async () => {
  try {
    await connectDB();

    // Clear existing videos
    await Video.deleteMany();
    console.log('Existing videos removed');

    // Insert dummy videos
    await Video.insertMany(videos);
    console.log('Dummy videos added');

    process.exit();
  } catch (error) {
    console.error('Seeding error:', error.message);
    process.exit(1);
  }
};

seedVideos();
