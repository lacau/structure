app.controller('architectureCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});

	var _file = $resource('/api/file');
	_file.query(function(result) {
		$scope.fileStructure = result;
	});
});