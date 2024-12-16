import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const response = await axios.get('/api/videos/trending');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
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
      <div style={styles.grid}>
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
    margin: '0 auto',
    maxWidth: '1400px',
    backgroundColor: '#fff', // White background
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#FF0000', // YouTube Red
    borderBottom: '2px solid #FF0000',
    display: 'inline-block',
    paddingBottom: '5px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
};

export default Home;
