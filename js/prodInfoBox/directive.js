myApp.directive('prodInfoBox', function($templateCache) {
  return {
  	restrict: 'E',
    template: $templateCache.get('prodInfoBox/template.html'),
    controller: 'prodInfoBoxController'
  };
});
