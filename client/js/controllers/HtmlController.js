app.controller('htmlCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});

	var _html = $resource('/api/file/client/views');
	_html.query(function(result) {
		$scope.html = result[0];
		$scope.htmlChildren = result[0].children;
	});
});