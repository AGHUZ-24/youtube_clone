import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UploadVideoForm from './components/UploadVideoForm';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar visible on all pages */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/video/:id" element={<VideoDetail />} /> {/* Video detail page */}
          <Route path="/profile/:id" element={<Profile />} /> {/* User profile page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page */}
          <Route path="/upload" element={<UploadVideoForm />} /> {/* Video upload page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
