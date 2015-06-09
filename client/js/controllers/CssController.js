app.controller('cssCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.page = result;
	});

	var Directive = $resource('/api/file/client/css');
	Directive.query(function(result) {
		$scope.css = result[0];
		$scope.cssChildren = result[0].children;
	});
});