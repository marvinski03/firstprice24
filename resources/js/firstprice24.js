jQuery(document).ready(function() {

	jQuery(".search-input").attr("placeholder","Suchbegriff eingeben und Enter drücken...");


	/** PP PLUS **/

	jQuery(".checkout .paypal-installment-specific-promotion").css("display","none");

	function checkFinanzierungsanzeige(){
		setTimeout(function(){
			if( jQuery("#checkoutButtonPayPalInstallment").text() == "Ratenzahlung beantragen" ){
				jQuery("#paypal-installment-specific-promotion_").css("display","block");
			}else{
				jQuery("#paypal-installment-specific-promotion_").css("display","none");
			}
		},500);
	}

	checkFinanzierungsanzeige();

	$("body").on('DOMSubtreeModified', "#checkoutButtonPayPalInstallment", function() {
	    checkFinanzierungsanzeige();
	});


	/** SOME SHARE **/

	function socialWindow(url) {
	    var left = (screen.width - 570) / 2;
	    var top = (screen.height - 570) / 2;
	    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
	    window.open(url,"NewWindow",params);
	}

	function setShareLinks() {
	    var pageUrl = encodeURIComponent(document.URL);
	    var tweet = encodeURIComponent(jQuery("meta[property='og:description']").attr("content"));
	    
	    jQuery(".fp24-some-share .social-share.facebook").on("click", function() {
	        url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
	        socialWindow(url);
	    });

	    jQuery(".fp24-some-share .social-share.twitter").on("click", function() {
	        url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
	        socialWindow(url);
	    });

	    jQuery(".fp24-some-share .social-share.linkedin").on("click", function() {
	        url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
	        socialWindow(url);
	    });
	}

	setShareLinks();
	
});