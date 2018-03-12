(function($) { "use strict";
	
	// --------------------------------------------------
    // owlCarousel
    // --------------------------------------------------

    /*testimonials-slider */
    $(".testimonials-slider-3").owlCarousel({
        items : 3,
        itemsDesktop : [1199, 2],
        itemsDesktopSmall : [979, 2],
        itemsTablet : [768, 2],
        itemsTabletSmall : [768, 1],
        itemsMobile : [479, 1], 
		pagination : false,
		autoPlay : false,
		slideSpeed : 300
    }); 

    // Custom Navigation owlCarousel - ".testimonials-slider"
    $(".testi-next").on("click", function() {
        $(this).parent().parent().parent().find('.testimonials-slider-3').trigger('owl.next');
    });
    $(".testi-prev").on("click", function() {
        $(this).parent().parent().parent().find('.testimonials-slider-3').trigger('owl.prev');
    });

     /*client-logo-slider */
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

    // Custom Navigation owlCarousel - ".testimonials-slider"
    $(".partner-next").on("click", function() {
        $(this).parent().parent().find('#client-logo').trigger('owl.next');
    });
    $(".partner-prev").on("click", function() {
        $(this).parent().parent().find('#client-logo').trigger('owl.prev');
    });

    
})(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	