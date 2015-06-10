app.controller('mainCtrl', function($scope, $resource, $location) {
	var Menu = $resource('/api/menu');
	var Config = $resource('/api/config');

	Menu.query(function(result) {
		$scope.menus = result;
	});

	Config.get(function(result) {
		$scope.page = {name: 'index.html', path: '/client/views/'};
		$scope.config = result;
	});

	$scope.switchView = function(path, index) {
		$scope.indexMenu = index;
		$location.path(path.toLowerCase());
	}

	$location.path($scope.switchView('objective', 0));
	$scope.title = 'Index.html';
});
