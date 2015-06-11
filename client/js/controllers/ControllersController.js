app.controller('controllersCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});

	var _client = $resource('/api/file/client/js/controllers');
	_client.query(function(result) {
		$scope.clientControllers = result[0];
		$scope.clientChildren = result[0].children;
	});

	var _server = $resource('/api/file/server/controllers');
	_server.query(function(result) {
		$scope.serverControllers = result[0];
		$scope.serverChildren = result[0].children;
	});
});