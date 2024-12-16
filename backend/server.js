const app = require('./app');
const mongoose = require('mongoose'); // Import mongoose
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5001;

// Database connection
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
  console.log('MongoDB connected successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
