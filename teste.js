var fs = require('fs');
var x = function(files, name, currentFile) {
		if(name.indexOf('node_modules') != -1)
			return;

		var _name = '/' + name;
		var names = fs.readdirSync('.' + _name);
		names.forEach(function(eachName) {
			var stat = fs.statSync('.' + _name + '/' + eachName);
			var file = {
				name: eachName,
				type: stat.isDirectory() ? 'Directory' : 'Archive'
			};

			if(stat.isDirectory()) {
				file.childs = [];
				x(files, name + '/' + eachName, file);
			}

			if(currentFile.childs)
				currentFile.childs.push(file);
			else
				files.push(file);
		});
}

var r = [];
x(r, 'client', '');
console.log(r);