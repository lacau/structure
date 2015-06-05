var fs = require('fs');

module.exports.list = function(req, res) {

	if(req.params.name) {
		fs.readFile('./' + req.params.name,'utf-8',function(err, data) {
			console.log('error: ' + err);
			console.log('data: ' + data);
			res.json(data);
		});
		return;
	}

	var getFileStructure = function(files, name, currentFile) {
		var _name = '/' + name;
		var names = fs.readdirSync('.' + _name);
		names.forEach(function(eachName) {
			if(eachName.indexOf('node_modules') != -1)
				return;

			var stat = fs.statSync('.' + _name + '/' + eachName);
			var file = {
				name: eachName,
				isDirectory: stat.isDirectory()
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
	var files = [{name: 'Structure', isDirectory: true, children: []}];
	getFileStructure(files[0].children, '', '');
	res.json(files);
}