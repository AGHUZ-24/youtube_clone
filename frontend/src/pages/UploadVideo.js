import React from 'react';

const UploadVideo = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Upload Video</h2>
      <p style={styles.text}>This is the Upload Video page. Feature coming soon!</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    color: '#555',
  },
};

export default UploadVideo;
