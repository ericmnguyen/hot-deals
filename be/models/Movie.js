// models/Movie.js
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
		rated: String,
		released: String,
		runtime: String,
		genre: String,
		director: String,
		writer: String,
		actors: String,
		plot: String,
		language: String,
		country: String,
		awards: String,
		poster: String,
		ratings: [
			{
				source: String,
				value: String,
			},
		],
		metascore: String,
		imdbRating: String,
		imdbVotes: String,
		imdbID: String,
		type: String,
		dvd: String,
		boxOffice: String,
		production: String,
		website: String,
		response: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Movie', MovieSchema, 'movies');