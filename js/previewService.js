myApp.service('previewService', function($http){

	
	this.buildCss = function() {
		var css = '<style>'+
		          'html,'+
		          'body {'+
		              'background-color: #fff;'+
		              'height: 100%;'+
		              'margin: 0;'+
		              'padding: 0;'+
		          '}'+
		         '</style>';
		
		return css;
	};

	this.buildScript = function() {
		return '<script type="application/javascript">'+
		       '</script>';
	};

	this.buildHead = function() {
		var css = this.buildCss(),
		head = '<head lang="en">'+
		        	'<meta charset="UTF-8">'+
		        	'<title></title>'+
		        	css +
		       '</head>'

		return head;
	};

	this.buildBody = function() {
		var script = this.buildScript(),
			body = '<body>'+
			     		'my page'+
			      		script+
			      '</body>';

		return body;
	};

	this.buildHtml = function() {
		var head = this.buildHead(),
			body = this.buildBody();

		var template =	'<!DOCTYPE html>'+
					    '<html>'+
					      head +
					      body+
					    '</html>';

		    return template;

	};

	return this;

});