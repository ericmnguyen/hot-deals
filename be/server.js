const express = require('express')
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();


// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/products', require('./routes/productRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));
// app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/movies', require('./routes/movieRoutes')); // Added movieRoutes

// Root Endpoint
app.get('/', (req, res) => {
  res.send('Hot Deals Backend API');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// Define Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});