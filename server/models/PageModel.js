var mongoose = require('mongoose');

module.exports = mongoose.model('Page', {
	index: Number,
	name: String,
	path: String,
	description: String
}, 'page')