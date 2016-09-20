myApp.directive('linkButtonBox', function($templateCache) {
  return {
  	restrict: 'E',
    template: $templateCache.get('linkButtonBox/template.html'),
    controller: 'linkButtonBoxController'
  };
});
