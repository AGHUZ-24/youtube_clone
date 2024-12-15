import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const Home = () => {
  const [videos, setVideos] = useState([]);

  // Fetch mock or real video data
  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        // Replace with your backend API for trending videos
        const response = await axios.get('/api/videos/trending');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching trending videos:', error);
        // Fallback: Mock Data
        setVideos([
          {
            _id: '1',
            title: 'Sample Video 1',
            description: 'This is a sample video description.',
            thumbnailUrl: 'https://via.placeholder.com/300',
          },
          {
            _id: '2',
            title: 'Sample Video 2',
            description: 'Another sample video description.',
            thumbnailUrl: 'https://via.placeholder.com/300',
          },
        ]);
      }
    };

    fetchTrendingVideos();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Trending Videos</h1>
      <div style={styles.videoList}>
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  videoList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
};

export default Home;
