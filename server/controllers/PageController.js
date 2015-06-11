var page = require('../models/PageModel');

module.exports.list = function(req, res) {
	var filter = {index: req.params.index};
	page.findOne(filter, function(err, results) {
		res.json(results);
	});
}