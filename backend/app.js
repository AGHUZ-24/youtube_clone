const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const videoRoutes = require('./routes/videos');
const authRoutes = require('./routes/auth'); // Import auth routes


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/videos', videoRoutes);
app.use('/api/auth', authRoutes); // Mount auth routes

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

// Default route
app.get('/', (req, res) => {
  res.send('API is running');
});

module.exports = app; // Properly export the app instance
