myApp.directive('previewText', function($templateCache) {
  return {
  	restrict: 'E',
    template: $templateCache.get('previewText/template.html')
  };
});
