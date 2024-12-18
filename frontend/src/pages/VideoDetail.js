import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideoDetails = async () => {
      console.log('Fetching video with ID:', id); // Debugging: Log the video ID

      try {
        const response = await axios.get(`http://localhost:5001/api/videos/${id}`);
        console.log('API Response:', response.data); // Debugging: Log the API response
        setVideo(response.data);
      } catch (err) {
        console.error('Error fetching video details:', err.message);
        setError('Failed to load video details');
      }
    };

    fetchVideoDetails();
  }, [id]);

  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h2>{video.title}</h2>
      <video controls width="100%">
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
      <p>Views: {video.views} | Likes: {video.likes}</p>
    </div>
  );
};

export default VideoDetail;
