app.directive('fileLink', function() {
	return {
		replace: true,
		scope: {
			file: '='
		},
		templateUrl: "views/fileLink.html"
	}
});