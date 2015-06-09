app.service('fileService', function($resource){
	var _openFile = function(page) {
		if(!page.path.startsWith('/'))
			page.path = '/' + page.path;

		var File = $resource('/api/file' + page.path + page.name);
		File.get(function(result) {
			var rows = [];
			result.source.split('\n').forEach(function(element, index){
				rows.push({index: index, text: element});
			});
			page.sourceCodeRows = rows;
		});
	}

	return {
		openFile: _openFile
	}
});