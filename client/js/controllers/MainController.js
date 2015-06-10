app.controller('mainCtrl', function($scope, $resource, $location) {
	var Menu = $resource('/api/menu');
	Menu.query(function(result) {
		$scope.menus = result;
	});

	var Config = $resource('/api/config');
	Config.get(function(result) {
		$scope.page = {name: 'index.html', path: '/client/views/'};
		$scope.config = result;
	});

	$scope.switchView = function(path, index) {
		$scope.indexMenu = index;
		$location.path(path.toLowerCase());
	}

	$scope.switchView('objective', 0);
	$scope.title = 'Index.html';
});
