var mongoose = require('mongoose');

module.exports = mongoose.model('Config', {
	title: String,
	author: String,
	year: Number,
	github: String
}, 'config')