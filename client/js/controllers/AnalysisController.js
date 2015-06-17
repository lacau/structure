app.controller('analysisCtrl', function($scope, $resource) {
	var _page = $resource('/api/page/' + $scope.indexMenu);
	_page.get(function(result) {
		$scope.page = result;
	});

	$scope.basicAreaChart = {
	"title": {
    "text": "My text"
  },
  "subtitle": {
    "text": "Subtitle"
  },
  "xAxis": {
    "labels": {}
  },
  "tooltip": {},
  "plotOptions": {
    "area": {
      "pointStart": 1940,
      "marker": {
        "enabled": false,
        "symbol": "circle",
        "radius": 2,
        "states": {
          "hover": {
            "enabled": true
          }
        }
      }
    }
  },
  "series": [
    {
      "name": "Lacau",
      "data": [
        400,
        194,
        301,
        130,
        300
      ]
    },
    {
      "name": "Teste",
      "data": [
        123,
        325,
        120,
        300,
        300
      ]
    }
    ]
	};
});