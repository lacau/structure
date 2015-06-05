var app = angular.module('structureApp', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/:name*',{
			templateUrl: function(urlAttr) {
				return '/views/' + urlAttr.name.toLowerCase() +'.html';
			}
		});
});