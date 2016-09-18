myApp.controller('mainController', function($scope, Utilities, previewService){
	
	function onSuccess(response) {
		console.log($scope.box);
		console.log($scope.link);
		console.log(response.data.data.products[0]);
		console.log(previewService.buildHtml());
	}

	function onError() {
		
	}

	$scope.generateAd = function() {
		if (Utilities.areValidColors($scope.box, $scope.link)) {
			Utilities.getData().then(onSuccess, onError);	
		}
	}
});
