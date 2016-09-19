myApp.service('Utilities', function($http){

	this.getData = function() {
		return $http.get('/api/products.json');
	}

	this.isValidHexColor = function(hexString) {
		return /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(hexString);
	}

	this.isValidTextColour = function(colorString) {
    	if (['', 'inherit', 'transparent'].indexOf(colorString) !== -1) {
    		return false;
    	}
	    
	    var image = document.createElement("img");
	    
	    image.style.color = "rgb(0, 0, 0)";
	    image.style.color = colorString;
	    if (image.style.color !== "rgb(0, 0, 0)") { 
	    	return true; 
	    }

	    image.style.color = "rgb(255, 255, 255)";
	    image.style.color = colorString;

	    return image.style.color !== "rgb(255, 255, 255)";
	}

	this.isValidColor = function(color) {
		return this.isValidTextColour(color) || this.isValidHexColor(color);
	}

	return this;

});