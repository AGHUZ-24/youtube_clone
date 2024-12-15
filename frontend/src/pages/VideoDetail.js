import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentSection from '../components/CommentSection';

const VideoDetail = () => {
  const { id } = useParams(); // Get video ID from URL
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`/api/videos/${id}`);
        setVideo(response.data);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideo();
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h1>{video.title}</h1>
      <video controls src={video.videoUrl} />
      <p>{video.description}</p>
      <CommentSection videoId={id} />
    </div>
  );
};

export default VideoDetail;
