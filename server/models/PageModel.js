var mongoose = require('mongoose');

module.exports = mongoose.model('Page', {
	index: Number,
	title: String,
	description: String
}, 'page')