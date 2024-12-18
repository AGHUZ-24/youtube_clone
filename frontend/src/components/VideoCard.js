import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <div style={styles.card}>
      <Link to={`/video/${video._id}`} style={styles.link}>
        <img src={video.thumbnailUrl} alt={video.title} style={styles.thumbnail} />
        <div style={styles.details}>
          <h3 style={styles.title}>{video.title}</h3>
          <p style={styles.views}>{video.views} views</p>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    backgroundColor: '#fff',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  thumbnail: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  details: {
    padding: '10px',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  views: {
    fontSize: '12px',
    color: '#606060',
  },
};

export default VideoCard;
