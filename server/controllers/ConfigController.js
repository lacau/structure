var Config = require('../models/ConfigModel');

module.exports.list = function(req, res) {
	Config.findOne({}, function(err, results) {
		res.json(results);
	});
}