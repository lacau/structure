app.controller('controllersCtrl', function($scope, $resource) {
	var Page = $resource('/api/page/' + $scope.indexMenu);
	Page.get(function(result) {
		$scope.title = result.title;
	});

	var Client = $resource('/api/file/client/js/controllers');
	Client.query(function(result) {
		$scope.clientControllers = result;
		$scope.clientChildren = result[0].children;
	});

	var Server = $resource('/api/file/server/controllers');
	Server.query(function(result) {
		$scope.serverControllers = result;
		$scope.serverChildren = result[0].children;
	});
});