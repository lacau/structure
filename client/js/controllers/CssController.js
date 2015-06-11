app.controller('cssCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});

	var _css = $resource('/api/file/client/css');
	_css.query(function(result) {
		$scope.css = result[0];
		$scope.cssChildren = result[0].children;
	});
});