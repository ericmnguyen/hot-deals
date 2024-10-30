// controllers/movieController.js
const Movie = require('../models/Movie');

// @desc    Get all movies
// @route   GET /api/movies
// @access  Public
exports.getAllMovies = async (req, res) => {
	try {
		// Fetch all movies from the database
		const movies = await Movie.find({ }).limit(10);

		// Respond with the movies data
		res.status(200).json({
			success: true,
			count: movies.length,
			data: movies,
		});
	} catch (error) {
		console.error(`Error fetching movies: ${error.message}`);
		res.status(500).json({
			success: false,
			message: 'Server Error',
		});
	}
};