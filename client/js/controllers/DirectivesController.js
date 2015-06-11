app.controller('directivesCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});

	var _directive = $resource('/api/file/client/js/directives');
	_directive.query(function(result) {
		$scope.directives = result[0];
		$scope.directivesChildren = result[0].children;
	});
});