app.controller('objectiveCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});
});