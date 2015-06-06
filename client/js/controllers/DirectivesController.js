app.controller('directivesCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.title = result.title;
	});

	var Directive = $resource('/api/file/client/js/directives');
	Directive.query(function(result) {
		$scope.directives = result[0];
		$scope.directivesChildren = result[0].children;
	});
});