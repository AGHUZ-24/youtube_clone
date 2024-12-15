import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

const Profile = () => {
  const { id } = useParams(); // Get user ID from URL
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        setProfile(response.data.profile);
        setVideos(response.data.videos);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.username}</h1>
      <p>{profile.bio}</p>
      <h2>Uploaded Videos</h2>
      <div className="video-list">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
