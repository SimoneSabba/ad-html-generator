myApp.controller('mainController', function($scope, Utilities, previewService){
	
	function init() {
		$scope.showValidationMessages = false;
	}

	function onSuccess(response) {
		var product = response.data.data.products[0]; 
		$scope.preview = previewService.buildHtml(product, $scope.box, $scope.link);
		previewService.appendPreviewToIframe($scope.preview);
	}

	function onError() {
		console.log('error fetching data...');
	}

	function validateBoxColors() {
		if ($scope.box) {
			$scope.boxBgColorIsValid = Utilities.isValidColor($scope.box.bgColor);	
			$scope.boxTextColorIsValid = Utilities.isValidColor($scope.box.textColor);	
		}
	}

	function validateLinkColors() {
		if ($scope.link) {
			$scope.linkBgColorIsValid = Utilities.isValidColor($scope.link.bgColor);	
			$scope.linkTextColorIsValid = Utilities.isValidColor($scope.link.textColor);	
		}
	}

	function areBoxColorsValid() {
		return $scope.boxBgColorIsValid && $scope.boxTextColorIsValid;
	}

	function areLinkColorsValid() {
		return $scope.linkBgColorIsValid && $scope.linkTextColorIsValid;
	}

	$scope.generateAd = function() {
		$scope.showValidationMessages = true;
		validateBoxColors();
		validateLinkColors();
		if (areBoxColorsValid() && areLinkColorsValid()) {
			$scope.showValidationMessages = false;
			Utilities.getData().then(onSuccess, onError);	
		}
	}

	init();
});
