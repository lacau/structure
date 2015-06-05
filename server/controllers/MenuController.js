var Menu = require('../models/MenuModel');

module.exports.list = function(req, res) {
	Menu.find({}, function(err, results) {
		res.json(results);
	});
}