app.directive('member', [ '$compile', function($compile) {
	return {
		restrict: "E",
		replace: true,
		scope: {
			member: '='
		},
		templateUrl: 'views/fileLine.html',
		link: function(scope, element, attrs) {
			if(angular.isArray(scope.member.children)) {
				$compile("<collection collection='member.children'></collection>")(scope, function(cloned, scope) {
					element.append(cloned);
				});
			}
		}
	}
}]);