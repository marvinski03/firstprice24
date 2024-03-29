jQuery(document).ready(function() {

	jQuery(".search-input").attr("placeholder","Suchbegriff eingeben und Enter drücken...");

	/** ADD ART NR **/

	$("#ask-a-question").attr("href",$("#ask-a-question").attr("href")+$("#art-nr-wrp").text());

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

	function setDownloadView(){
		$(".fp24-anleitung a").html("<b>Downloads</b> <i class='fa fa-download'></i> Anleitung (PDF)");
		if( $(".fp24-anleitung a").length > 0 ){
			$(".fp24-beschreibung a").html("<b>&nbsp;</b> <i class='fa fa-download'></i> Beschreibung (PDF)");
		}else{
			$(".fp24-beschreibung a").html("<b>Downloads</b> <i class='fa fa-download'></i> Beschreibung (PDF)");
		}
	}

	setDownloadView();
	

	$(".variation-select select").change(function(){	
		setDownloadView();
		setTimeout(function(){
			setDownloadView();
		},500);
		setTimeout(function(){
			setDownloadView();
		},1000);
	});

	$('body').on('change', '.variation-select select', function (event) {
		setDownloadView();
		setTimeout(function(){
			setDownloadView();
		},500);
		setTimeout(function(){
			setDownloadView();
		},1000);
	});



	/** SCROLL TO TOP **/


	$(".to-top.d-md-none").click(function(e){
		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
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


	/** AMZN PAYMENT BEFORE FINANCING @ SINGLE ITEM **/

	$(".single .amzPayButton").insertBefore(".paypal-installment-specific-promotion");

	/** COLORS FOR AVAILABILITY **/

	function labelcolor(){
		var availableGreen = "Innerhalb von 24h versandfertig";
		$(".availability-preview").each(function(){
		    if( $(this).children().text().indexOf(availableGreen) >= 0 ){
		        $(this).addClass("green-label");
		    }
		});
	}
	
	labelcolor();

	setTimeout(function(){
		labelcolor();
	}, 1000);


	setTimeout(function(){
		labelcolor();
	}, 3000);	
});