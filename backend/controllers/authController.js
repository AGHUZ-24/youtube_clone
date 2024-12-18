const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User Signup Controller
const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error('Signup error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// User Login Controller
const login = async (req, res) => {
    const { email, password } = req.body;
  
    console.log('Incoming login request:', email, password); // Debugging input
  
    try {
      // Validate input
      if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Check if the user exists
      const user = await User.findOne({ email });
      console.log('User found:', user); // Debugging: Check if user is found
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Password validation result:', isPasswordValid); // Debugging: Check password match
  
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      console.log('Generated Token:', token); // Debugging: Ensure token is generated
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error('Login error:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = { signup, login };
