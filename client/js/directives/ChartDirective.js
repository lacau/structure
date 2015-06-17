app.directive('chart', function() {
	return {
		restrict: 'E',
		template: '<div></div>',
		scope: {
			chartData: '=value',
			chartObj: '=?'
		},
		transclude: true,
		replace: true,
		link: function($scope, $element, $attrs) {
			$scope.$watch('chartData', function(value) {
				if(!value)
					return;

				$scope.chartData.chart = $scope.chartData.chart || {};
				$scope.chartData.chart.renderTo = $scope.chartData.chart.renderTo || $element[0];
				if($attrs.type)
					$scope.chartData.chart.type = $scope.chartData.chart.type || $attrs.type;
				if($attrs.height)
					$scope.chartData.chart.height = $scope.chartData.chart.height || $attrs.height;
				if ($attrs.width)
					$scope.chartData.chart.width = $scope.chartData.chart.type || $attrs.width;

				$scope.chartObj = new Highcharts.Chart($scope.chartData);
			});
		}
	};
});