app.directive('loading', ['$rootScope', function($rootScope) {
	return {
		restrict: 'E',
		template: "<div class='loading' ng-if='isRouteLoading'></div>",
		link: function(scope, element, attrs) {
			scope.isLoading = false;

			$rootScope.$on('$routeChangeStart', function() {
				scope.isRouteLoading = true;
			});
			$rootScope.$on('$routeChangeSuccess', function() {
				scope.isRouteLoading = false;
			});
		}
	}
}]);