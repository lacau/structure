app.controller('htmlCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.page = result;
	});

	var Directive = $resource('/api/file/client/views');
	Directive.query(function(result) {
		$scope.html = result[0];
		$scope.htmlChildren = result[0].children;
	});
});