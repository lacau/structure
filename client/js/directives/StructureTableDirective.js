app.directive('structureTable', function() {
	return {
		replace: true,
		scope: {
			data: '='
		},
		templateUrl: "views/structureTable.html"
	}
})