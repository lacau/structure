app.directive('loading', ['$rootScope', function($rootScope) {
	return {
		templateUrl: 'views/loading.html',
		link: function(scope, element, attrs) {
			$rootScope.$on('loading_show', function() {
				element.removeClass('invisible');
				return element.addClass('visible');
			});
			$rootScope.$on('loading_hide', function() {
				element.removeClass('visible');
				return element.addClass('invisible');
			});
		}
	}
}]);