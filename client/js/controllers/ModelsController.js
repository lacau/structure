app.controller('modelsCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});

	var _model = $resource('/api/file/server/models');
	_model.query(function(result) {
		$scope.models = result[0];
		$scope.modelsChildren = result[0].children;
	});
});