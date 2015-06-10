app.controller('sourceCodeCtrl', function ($scope, $modal, fileService) {
	$scope.open = function (page) {
		if(!page.isDirectory) {
			fileService.openFile(page);

			var modalInstance = $modal.open({
				animation: true,
				templateUrl: 'sourceCodeContent.html',
				controller: 'sourceCodeInstanceCtrl',
				size: 'lg',
				resolve: {
					page: function () {
						return page;
					}
				}
			});
		}
	};
});

app.controller('sourceCodeInstanceCtrl', function ($scope, $modalInstance, page) {
	$scope.page = page;
	$scope.close = function () {
		$modalInstance.close();
	};
});