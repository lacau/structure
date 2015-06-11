var config = require('../models/ConfigModel');

module.exports.list = function(req, res) {
	config.findOne({}, function(err, results) {
		res.json(results);
	});
}