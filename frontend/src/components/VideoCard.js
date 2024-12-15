import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <div style={styles.card}>
      <Link to={`/video/${video._id}`} style={styles.link}>
        <img src={video.thumbnailUrl} alt={video.title} style={styles.thumbnail} />
        <h3 style={styles.title}>{video.title}</h3>
        <p style={styles.description}>{video.description}</p>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
  },
  thumbnail: {
    width: '100%',
    borderRadius: '8px',
  },
  title: {
    fontSize: '18px',
    margin: '10px 0',
  },
  description: {
    fontSize: '14px',
    color: '#555',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

export default VideoCard;
