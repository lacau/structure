var Page = require('../models/PageModel');

module.exports.list = function(req, res) {
	Filter = {index: req.params.index};
	Page.findOne(Filter, function(err, results) {
		res.json(results);
	});
}