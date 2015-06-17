app.service('fileService', function($resource) {
	var _imgExtensions =['png'];

	var _openFile = function(page) {
		if(!page.path.indexOf('/') == 0)
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

	var _isImage = function(name) {
		var _ext = name.substring(name.indexOf('.') + 1);
		return _imgExtensions.indexOf(_ext) != -1;
	}

	return {
		openFile: _openFile,
		isImage: _isImage
	}
});