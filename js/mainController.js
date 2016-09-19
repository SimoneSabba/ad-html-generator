myApp.controller('mainController', function($scope, Utilities, previewService){
	
	function onSuccess(response) {
		var product = response.data.data.products[0]; 
		$scope.preview = previewService.buildHtml(product, $scope.box, $scope.link);
		previewService.appendPreviewToIframe($scope.preview);
	}

	function onError() {
		console.log('error fetching data...');
	}

	$scope.generateAd = function() {
		if (Utilities.areValidColors($scope.box, $scope.link)) {
			Utilities.getData().then(onSuccess, onError);	
		}
	}
});
