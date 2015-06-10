app.service('fileService', function($resource){
	var _openFile = function(page) {
		if(!page.path.startsWith('/'))
			page.path = '/' + page.path;

		var File = $resource('/api/file' + page.path + page.name);
		File.get(function(result) {
			var _rows = [];
			result.source.split('\n').forEach(function(element, index){
				_rows.push({index: index, text: element});
			});
			page.sourceCodeRows = _rows;
		});
	}

	return {
		openFile: _openFile
	}
});