app.controller('objectiveCtrl', function($scope, $resource) {
	console.log('controller called');
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.title = result.title;
		$scope.description = result.description;
	});
});