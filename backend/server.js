require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const corsOptions = {
    origin: [
        'http://localhost:4200',
        'https://gabrieliturre.netlify.app',
        'https://gabrieliturre.com'
    ],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Database Connection
// Note: Password needs to be URL-encoded if it contains special characters
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://gabrieliturre:154461948Chris@portfolio1.lxd4wby.mongodb.net/portfolio?retryWrites=true&w=majority&appName=portfolio1';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => {
        console.error('❌ Could not connect to MongoDB:', err.message);
        console.error('Please check:');
        console.error('1. MongoDB Atlas username and password are correct');
        console.error('2. Database user exists in MongoDB Atlas');
        console.error('3. IP whitelist includes your current IP (or use 0.0.0.0/0 for testing)');
    });

// Routes
app.use('/api/feedback', feedbackRoutes);

// Health Check
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
