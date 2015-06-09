app.controller('modalCtrl',['$scope', '$modal', 'fileService', function ($scope, $modal, fileService) {
  $scope.open = function (page) {
    if(!page.isDirectory) {
      fileService.openFile(page);

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'modalContent.html',
        controller: 'modalInstanceCtrl',
        size: 'lg',
        resolve: {
          page: function () {
            return page;
          }
        }
      });
    }
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}]);

app.controller('modalInstanceCtrl', function ($scope, $modalInstance, page) {
  $scope.page = page;
  $scope.ok = function () {
    $modalInstance.close();
  };
});