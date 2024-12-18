import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UploadVideo from './pages/UploadVideo';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={styles.appContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<UploadVideo />} />
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
