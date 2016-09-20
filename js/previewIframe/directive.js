myApp.directive('previewIframe', function($templateCache) {
  return {
  	restrict: 'E',
    template: $templateCache.get('previewIframe/template.html')
  };
});
