app.controller('modelsCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.title = result.title;
	});

	var Model = $resource('/api/file/server/models');
	Model.query(function(result) {
		$scope.models = result[0];
		$scope.modelsChildren = result[0].children;
	});
});