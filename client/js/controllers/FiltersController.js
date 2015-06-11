app.controller('filtersCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});

	var _filter = $resource('/api/file/client/js/filters');
	_filter.query(function(result) {
		$scope.filters = result[0];
		$scope.filtersChildren = result[0].children;
	});
});