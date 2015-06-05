app.directive('member', [ '$compile', 'fileService', function($compile, fileService) {
	return {
		restrict: "E",
		replace: true,
		scope: {
			member: '='
		},
		templateUrl: 'views/fileLine.html',
		link: function(scope, element, attrs) {
			scope.openFile = fileService.openFile;
			if(angular.isArray(scope.member.children)) {
				$compile("<collection collection='member.children'></collection>")(scope, function(cloned, scope) {
					element.append(cloned);
				});
			}
		}
	}
}]);