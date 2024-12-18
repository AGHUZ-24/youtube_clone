import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('Guest'); // Default username

  // Fetch video details and comments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`http://localhost:5001/api/videos/${id}`);
        setVideo(videoRes.data);

        const commentsRes = await axios.get(`http://localhost:5001/api/videos/${id}/comments`);
        setComments(commentsRes.data);
      } catch (err) {
        console.error('Error fetching video or comments:', err.message);
      }
    };

    fetchData();
  }, [id]);

  // Submit a new comment
  const handleAddComment = async () => {
    if (!newComment) return;

    try {
      const response = await axios.post(`http://localhost:5001/api/videos/${id}/comments`, {
        username,
        text: newComment,
      });

      setComments([...comments, response.data.comment]);
      setNewComment('');
    } catch (err) {
      console.error('Error adding comment:', err.message);
    }
  };

  if (!video) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <h2>{video.title}</h2>
      <video controls style={styles.video}>
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
      <p>Views: {video.views} | Likes: {video.likes}</p>

      <div style={styles.commentSection}>
        <h3>Comments</h3>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <textarea
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={styles.textarea}
          ></textarea>
          <button onClick={handleAddComment} style={styles.button}>
            Add Comment
          </button>
        </div>
        <div>
          {comments.map((comment, index) => (
            <div key={index} style={styles.comment}>
              <strong>{comment.username}</strong>: {comment.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  video: {
    width: '100%',
    marginBottom: '20px',
  },
  commentSection: {
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '200px',
  },
  textarea: {
    padding: '10px',
    marginTop: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    height: '80px',
    resize: 'none',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#FF0000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  comment: {
    marginTop: '10px',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default VideoDetail;
