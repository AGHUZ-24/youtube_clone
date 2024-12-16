const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Video = require('./models/Video');

dotenv.config();

const seedVideos = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Sample video data
    const videos = [
      {
        title: 'Sample Video 1',
        description: 'This is a sample video description.',
        thumbnailUrl: 'https://via.placeholder.com/300',
        videoUrl: 'https://example.com/video1.mp4',
        views: 120,
        likes: 45,
      },
      {
        title: 'Sample Video 2',
        description: 'Another sample video description.',
        thumbnailUrl: 'https://via.placeholder.com/300',
        videoUrl: 'https://example.com/video2.mp4',
        views: 85,
        likes: 30,
      },
    ];

    // Clear existing videos and insert new ones
    await Video.deleteMany({});
    await Video.insertMany(videos);

    console.log('Sample videos seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding videos:', error);
    mongoose.connection.close();
  }
};

seedVideos();
