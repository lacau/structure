app.controller('mainCtrl', function($scope, $resource, $location) {
	var _menu = $resource('/api/menu');
	_menu.query(function(result) {
		$scope.menus = result;
	});

	var _config = $resource('/api/config');
	_config.get(function(result) {
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
