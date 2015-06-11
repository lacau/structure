var menu = require('../models/MenuModel');

module.exports.list = function(req, res) {
	menu.find({}, function(err, results) {
		res.json(results);
	});
}