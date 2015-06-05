var mongoose = require('mongoose');

module.exports = mongoose.model('Menu', {
	index: Number,
	label: String
}, 'menu')