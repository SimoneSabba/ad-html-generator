myApp.directive('generateButton', function($templateCache) {
  return {
  	restrict: 'E',
    template: $templateCache.get('generateButton/template.html')
  };
});
