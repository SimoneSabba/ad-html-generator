myApp.service('previewService', function($http){

	
	this.buildImageCss = function() {
		return '.productImage {'+
					'width: 200px;'+
    				'margin: 10px;'+
    				'padding: 10px;'+
				'}';
	};

	this.buildProdInfoCss = function(boxInfo) {
		return '.productInfo {'+
					'text-align: center;'+
					'border: 1px solid black;'+
					'width: 200px;'+
    				'margin: 10px;'+
    				'padding: 10px;'+
    				'background-color: #'+boxInfo.bgColor+';'+
    				'color: #'+boxInfo.textColor+';'+
				'}';
	};

	this.buildLinkCss = function(linkInfo) {
		return '.productInfo > button {'+
    				'background-color: #'+linkInfo.bgColor+';'+
    				'color: #'+linkInfo.textColor+';'+
				'}';
	};

	this.buildGenericCss = function() {
		return 'html,'+
		          'body {'+
		              'background-color: #fff;'+
		              'height: 100%;'+
		              'margin: 0;'+
		              'padding: 0;'+
		          '}';
	}

	this.buildCss = function(boxInfo, linkInfo) {
		return '<style>'+
		        	this.buildGenericCss()+
		          	this.buildImageCss()+
		          	this.buildProdInfoCss(boxInfo)+
		          	this.buildLinkCss(linkInfo)+
	        	'</style>';
	};

	this.buildScript = function(link) {
		return '<script type="application/javascript">'+ 
					'function onClickHandler() {'+
  						'window.open(\''+link+'\', \'_blank\');'+
					'}'+
				'</script>';
	};

	this.buildHead = function(boxInfo, linkInfo) {

		return '<head lang="en">'+
	        		'<meta charset="UTF-8">'+
		        	'<title></title>'+
		        	this.buildCss(boxInfo, linkInfo) +
		       '</head>';
	};

	this.buildImageBox = function(productImage) {
		return '<div class="productImage">'+
					'<img src="'+productImage+'">'+
				'</div>';
	};

	this.buildProductInfoBox = function(productName) {
		return '<div class="productInfo">'+
					'<p>'+productName+'</p>'+
					this.buildButton()+
				'</div>';	
	};

	this.buildBody = function(product) {
		return '<body>'+
		     		this.buildImageBox(product.img)+
		     		this.buildProductInfoBox(product.name)+
		      		this.buildScript(product.link)+
		      	'</body>';
	};

	this.buildButton = function() {
		return '<button onclick="onClickHandler()" id="buyNowButton">Buy Now</button>'
	}

	this.buildHtml = function(product, boxInfo, linkInfo) {
		return '<!DOCTYPE html>'+
		    	'<html>'+
			      this.buildHead(boxInfo, linkInfo) +
			      this.buildBody(product)+
			    '</html>';
	};

	this.appendPreviewToIframe = function(htmlToAppend) {
		var 
			iframe = document.getElementById('preview_iframe'),		 
			iframedoc = iframe.document;

		if (iframe.contentDocument) {
        	iframedoc = iframe.contentDocument;
		} else if (iframe.contentWindow) {
        	iframedoc = iframe.contentWindow.document;
        }

        if (iframedoc){
        	iframedoc.open();
         	iframedoc.writeln(htmlToAppend);
         	iframedoc.close();
     	}
	}

	return this;

});