const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize app
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/habit-tracker';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Add a test route for the root path
app.get('/', (req, res) => {
  res.send('Server is running! Welcome to the Habit Tracker API.');
});

// Define other routes here (e.g., for habits)
// app.use('/api/habits', habitRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});