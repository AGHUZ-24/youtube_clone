import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/videos/trending'); // Adjust API endpoint as needed
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Trending Videos</h1>
      <div className="video-list">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
