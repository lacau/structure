var app = angular.module('structureApp', ['ngResource', 'ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/:name*',{
			templateUrl: function(urlAttr) {
				return '/views/' + urlAttr.name.toLowerCase() +'.html';
			},
			controller: function($scope, $routeParams, $resource, $controller) {
				$controller($routeParams.name.toLowerCase() + 'Ctrl', {$scope:$scope, $resource:$resource});
			}
		});

	$httpProvider.interceptors.push('httpInterceptor');
});