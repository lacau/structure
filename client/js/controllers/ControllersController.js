app.controller('controllersCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.title = result.title;
	});
});