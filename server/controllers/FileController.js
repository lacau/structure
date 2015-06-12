var fs = require('fs');

module.exports.list = function(req, res) {
	var _initPath = req.params.path || '';

	if(req.params['0'])
		_initPath = req.params.path + req.params['0'];

	var _exclusions = ['node_modules', '.git'];
	for(var i = 0; i < _exclusions.length; i++)
		if(_initPath.indexOf(_exclusions[i]) != -1) {
			res.sendStatus(403);
			return;
		}

	if(_initPath.indexOf('.') != -1) {
		fs.readFile('./' + _initPath,'utf-8',function(err, data) {
			res.json({source: data});
		});
		return;
	}

	var files = [];
	if(_initPath) {
		var name = _initPath.substring(_initPath.lastIndexOf('/'));
		files.push({name: name, isDirectory: true, path: _initPath, children: []});
	} else
		files.push({name: 'structure',isDirectory: true, path: './', children: []});

	var getFileStructure = function(files, name, currentFile) {
		var _name = '/' + name;
		var _names = fs.readdirSync('.' + _name);
		_names.forEach(function(eachName) {
			if(_exclusions.indexOf(eachName) != -1)
				return;

			var stat = fs.statSync('.' + _name + '/' + eachName);
			var file = {
				name: eachName,
				isDirectory: stat.isDirectory(),
				path: _name.substring(1) + '/'
			};

			if(stat.isDirectory()) {
				file.children = [];
				getFileStructure(files, name + '/' + eachName, file);
			}

			if(currentFile.children)
				currentFile.children.push(file);
			else
				files.push(file);
		});
	}

	getFileStructure(files[0].children, _initPath, '');
	res.json(files);
}