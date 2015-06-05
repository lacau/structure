app.service('fileService', function(){
	var _openFile = function(member) {
		console.log(member);
	}

	return {
		openFile: _openFile
	}
});