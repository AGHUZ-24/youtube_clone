import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Navigation bar component
import Home from './pages/Home'; // Home Page (Trending Videos)
import VideoDetail from './pages/VideoDetail'; // Video Detail Page
import Signup from './pages/Signup'; // Signup Page
import Login from './pages/Login'; // Login Page

const App = () => {
  return (
    <Router>
      {/* Navbar displayed on all pages */}
      <Navbar />
      <div style={styles.appContainer}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/video/:id" element={<VideoDetail />} /> {/* Video Details Page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
};

export default App;
