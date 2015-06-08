app.controller('modalCtrl', function ($scope, $modal, $log) {
  $scope.open = function (title) {
    console.log('title: ' + title);
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'modalContent.html',
      controller: 'modalInstanceCtrl',
      resolve: {
        title: function () {
          return title;
        }
      }
    });

    modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
});

app.controller('modalInstanceCtrl', function ($scope, $modalInstance, title) {
  $scope.title = title + '.html';
  $scope.ok = function () {
    $modalInstance.close();
  };
});