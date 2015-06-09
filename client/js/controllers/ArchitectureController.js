app.controller('architectureCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.page = result;
	});

	var File = $resource('/api/file');
	File.query(function(result) {
		$scope.fileStructure = result;
	});
});