import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css'; // Import external CSS for cleaner separation

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <Link to={`/video/${video._id}`} className="video-card-link">
        <img src={video.thumbnailUrl} alt={video.title} className="video-thumbnail" />
        <div className="video-details">
          <h3 className="video-title">{video.title}</h3>
          <p className="video-description">{video.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
