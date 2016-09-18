myApp.service('Utilities', function($http){

	this.getData = function() {
		return $http.get('/api/products.json');
	}

	this.isValidHexColor = function(hexString) {
		return /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(hexString);
	}

	this.areValidColors = function(box, link) {
		if (box && link) {
			var prefix = '#';
		
			return this.isValidHexColor(prefix+box.bgColor) && 
				   this.isValidHexColor(prefix+box.textColor) && 
				   this.isValidHexColor(prefix+link.bgColor) && 
				   this.isValidHexColor(prefix+link.textColor);
				}
			return false;
	}
	
	this.buildAd = function() {
		
	var template =	'<!DOCTYPE html>'+
	    '<html>'+
	      '<head lang="en">'+
	        '<meta charset="UTF-8">'+
	        '<title></title>'+
	        '<style>'+
	          'html,'+
	          'body {'+
	              'background-color: #fff;'+
	              'height: 100%;'+
	              'margin: 0;'+
	              'padding: 0;'+
	          '}'+
	         '</style>'+
	      '</head>'+
	      '<body>'+
	      'dsafsdsdss'+
	      '<script type="application/javascript">'+
	      '</script>'+
	      '</body>'+
	    '</html>'

	    return template;
	};

	return this;

});