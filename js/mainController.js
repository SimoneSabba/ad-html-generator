myApp.controller('mainController', function($scope, Utilities){
	$scope.generateAd = function() {
		
		console.log($scope.box);
		console.log($scope.link);
		console.log(Utilities.buildAd());
	}
});
