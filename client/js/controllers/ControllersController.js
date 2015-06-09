app.controller('controllersCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.page = result;
	});

	var Client = $resource('/api/file/client/js/controllers');
	Client.query(function(result) {
		$scope.clientControllers = result[0];
		$scope.clientChildren = result[0].children;
	});

	var Server = $resource('/api/file/server/controllers');
	Server.query(function(result) {
		$scope.serverControllers = result[0];
		$scope.serverChildren = result[0].children;
	});
});