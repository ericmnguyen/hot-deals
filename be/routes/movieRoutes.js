// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const { getAllMovies } = require('../controllers/movieController');

// @route   GET /api/movies
router.get('/', getAllMovies);

module.exports = router;