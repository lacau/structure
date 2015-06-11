app.controller('servicesCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});

	var _service = $resource('/api/file/client/js/services');
	_service.query(function(result) {
		$scope.services = result[0];
		$scope.servicesChildren = result[0].children;
	});
});