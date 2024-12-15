import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comments/${videoId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [videoId]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/comments/${videoId}`, { text: newComment });
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <div>
        {comments.map((comment) => (
          <div key={comment._id} style={styles.comment}>
            <p>{comment.text}</p>
            <small>by {comment.username}</small>
          </div>
        ))}
      </div>
      <form onSubmit={handleAddComment} style={styles.form}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Post</button>
      </form>
    </div>
  );
};

const styles = {
  comment: {
    borderBottom: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
  },
  form: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CommentSection;
