app.controller('servicesCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.title = result.title;
	});

	var Service = $resource('/api/file/client/js/services');
	Service.query(function(result) {
		$scope.services = result[0];
		$scope.servicesChildren = result[0].children;
	});
});