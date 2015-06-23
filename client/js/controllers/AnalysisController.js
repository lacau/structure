app.controller('analysisCtrl', function($scope, $resource) {
    var _page = $resource('/api/page/' + $scope.indexMenu);
    _page.get(function(result) {
        $scope.page = result;
    });

    var _file = $resource('/api/file');
    _file.query(function(result) {
        var _analysis = $resource('/api/analysis');
        _analysis.query(result, function(_data) {
            $scope.analysisTable = _data[0].analysisTable;
            $scope.basicChart = _data[0].columnChart;
        }); 
    });
});