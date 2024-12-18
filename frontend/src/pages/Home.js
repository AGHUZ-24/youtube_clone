import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        // Fetch trending videos from the backend
        const response = await axios.get('http://localhost:5001/api/videos/trending');
        console.log('Trending Videos:', response.data); // Debugging: Log the response
        setVideos(response.data); // Set videos in state
      } catch (error) {
        console.error('Error fetching trending videos:', error.message);
        setError('Failed to load videos. Please try again.');
      }
    };

    fetchTrendingVideos();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Trending Videos</h1>
      {error && <p style={styles.error}>{error}</p>}
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
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#FF0000', // YouTube Red
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
};

export default Home;
