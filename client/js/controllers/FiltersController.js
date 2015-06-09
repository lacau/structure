app.controller('filtersCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.page = result;
	});

	var Directive = $resource('/api/file/client/js/filters');
	Directive.query(function(result) {
		$scope.filters = result[0];
		$scope.filtersChildren = result[0].children;
	});
});