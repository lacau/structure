app.service('fileService', function(){
	var _openFile = function(member) {
		if(!member.isDirectory)
			console.log(member);
	}

	return {
		openFile: _openFile
	}
});