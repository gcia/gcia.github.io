(function($) { "use strict";
	
	// --------------------------------------------------
    // owlCarousel
    // --------------------------------------------------   

    /* latest-news-items */
    $(".latest-news-items-3").owlCarousel({
        items : 2,
        itemsDesktop : [1199, 2],
        itemsDesktopSmall : [979, 2],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
		pagination : false,
		autoPlay : false,
		slideSpeed : 300,
    });    

    // Custom Navigation owlCarousel - ".latest-news-items"
    $(".latest-next").on("click", function() {
        $(this).parent().parent().parent().find('.latest-news-items-3').trigger('owl.next');
    });
    $(".latest-prev").on("click", function() {
        $(this).parent().parent().parent().find('.latest-news-items-3').trigger('owl.prev');
    });
	
	 /*clientes */
    $("#client-logo").owlCarousel({
        items : 6,
        itemsCustom : false,
        itemsDesktop : [1199, 5],
        itemsDesktopSmall : [979, 4],
        itemsTablet : [768, 2],
        itemsTabletSmall : [768, 3],
        itemsMobile : [479, 1],
		pagination : false,
		autoPlay : false,
		slideSpeed : 300
    }); 

    // Custom Navigation owlCarousel - "clientes"
    $(".partner-next").on("click", function() {
        $(this).parent().parent().find('#client-logo').trigger('owl.next');
    });
    $(".partner-prev").on("click", function() {
        $(this).parent().parent().find('#client-logo').trigger('owl.prev');
    });
  

    
})(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	