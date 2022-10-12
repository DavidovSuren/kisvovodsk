/**
 * Accessibility-ready responsive menu.
 *
 */

(function ($) {

	 	/*Sticky nav
		--------------*/
		$(window).on('scroll',function() {
	       var scroll = $(window).scrollTop();
	       if (scroll < 40) {
	        $(".site-header").removeClass("scroll-header animated fadeInDown");
	       }else{
	        $(".site-header").addClass("scroll-header animated fadeInDown");
	       }
	  	});

	//* Add menu-toggle button
	$('.nav-primary').before('<button class="menu-toggle toggle-primary" role="button">Menu <span></span><span></span><span></span><span></span></button>');

	//* Add sub-menu-toggle buttons
	$('.menu-item-has-children').append(
		'<button class="sub-menu-toggle" role="button"></button>'
	);

	//* Add aria labels
	$('.menu-toggle, .sub-menu-toggle').attr({ "aria-expanded": false, "aria-pressed": false });

	//* Smaller screens responsive menu
	$('.toggle-primary').on("click", function () {
		$(this).toggleClass("activated");
		$('.nav-primary').slideToggle(100);
		//* Toggle aria attributes
		$(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'true' ? 'false' : 'true');
		$(this).attr('aria-pressed', $(this).attr('aria-pressed') === 'true' ? 'false' : 'true');
	});

	$(".menu-item-has-children .sub-menu-toggle").on("click", function () {
		$(this).toggleClass("activated");
		$(this).siblings(".sub-menu").slideToggle(100);
		//* Toggle aria attributes
		$(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'true' ? 'false' : 'true');
		$(this).attr('aria-pressed', $(this).attr('aria-pressed') === 'true' ? 'false' : 'true');
	});



	$('.toggle-dropdown-link').on("click", function () {
		$(this).toggleClass("activated");
		$('.customer-care-nav').slideToggle(100);
		//* Toggle aria attributes
		$(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'true' ? 'false' : 'true');
		$(this).attr('aria-pressed', $(this).attr('aria-pressed') === 'true' ? 'false' : 'true');
	});

	$('a.down-link').on("click", function(e) {
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top - 85
	    }, 1000);
	    e.preventDefault();
	});
	$('.btn-link').before('<span></span>');
	$('.btn-link').after('<span></span>');

	$('.submenu-widgets').before('<button class="menu-toggle submenu_toggle" role="button">Menu <span></span><span></span><span></span><span></span></button>');

	$('.submenu_toggle').click(function() {
	    $(this).toggleClass('menu__toggle--open activated');
	    $('.submenu-widgets').toggleClass('submenu-widgets-open');
	    $('.submenu-widgets-area').toggleClass('submenu-widgets-area-active');
	});

	var PopIn = $("#content-popin");
	
	var PopInOpen = PopIn.attr("class");
	
	function TogglePopIn(){
		if(PopIn.hasClass('left-position-popin')) {
			PopIn.toggleClass("hide-left-popin");
		} else {
			PopIn.toggleClass("hide-right-popin");
		}
	}
	
	$(".box-arrow-popin").click(function(){
		TogglePopIn();
	});
	
		
	$('#content-popin .box-arrow-popin').click(function(){
		$('.box-content-popin').toggleClass('open');
		$('.box-arrow-popin .arrow').toggleClass('open');
	});
})(jQuery);

  
  /***********************Home Page Transitions JS***************************/

jQuery(window).load(function() {


jQuery(window).scroll(function(){
homepageAnimation();
});

homepageAnimationOnload();

homepageAnimation();


function homepageAnimation(){

      if (jQuery('.front-page-0').length) {
		var fp1content =  jQuery('.front-page-0').not('.front-page-1').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('.front-page-0').not('.front-page-1').height()*0.4 ){
			jQuery('.front-page-0').not('.front-page-1').addClass("inView");
		}
}

if (jQuery('.front-page-1').length) {
		var fp1content =  jQuery('.front-page-1').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('.front-page-1').height()*0.4 ){
			jQuery('.front-page-1').addClass("inView");
		}
}

if (jQuery('.front-page-3').length) {
		var fp1content =  jQuery('.front-page-3').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('.front-page-3').height()*0.2 ){
			jQuery('.front-page-3').addClass("inView");
		}
}

if (jQuery('section.front-page-4').length) {
		var fp1content =  jQuery('section.front-page-4').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('section.front-page-4').height()*0.3 ){
			jQuery('section.front-page-4').addClass("inView");
		}
}

if (jQuery('.front-page-7').length) {
		var fp1content =  jQuery('.front-page-7').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('.front-page-7').height()*0.7 ){
			jQuery('.front-page-7').addClass("inView");
		}
}

if (jQuery('.front-page-6').length) {
		var fp1content =  jQuery('.front-page-6').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('.front-page-6').height()*0.5 ){
			jQuery('.front-page-6').addClass("inView");
		}
}

if (jQuery('.amenities-sec').length) {
		var fp1content =  jQuery('.amenities-sec').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('.amenities-sec').height()*0.7 ){
			jQuery('.amenities-sec').addClass("inView");
		}
}

if (jQuery('.wedding-section-wrap').length) {
		var fp1content =  jQuery('.wedding-section-wrap').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('.wedding-section-wrap').height()*0.7 ){
			jQuery('.wedding-section-wrap').addClass("inView");
		}
}

if (jQuery('.wedding-section').length) {
		var fp1content =  jQuery('.wedding-section').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('.wedding-section').height()*0.7 ){
			jQuery('.wedding-section').addClass("inView");
		}
}
  if (jQuery('footer').length) {
		var fp1content =  jQuery('footer').offset().top-jQuery(window).scrollTop();
		if(fp1content <= jQuery(window).height()-jQuery('footer').height()*0.1 ){
			jQuery('footer').addClass("inView");
		}
}
  
}  

function homepageAnimationOnload(){
	
	
	if ( jQuery('.front-page-0 .room-sec-inner .room-content .room-content-inner ul').length) {
      var counter = 0;
      jQuery( ".front-page-0 .room-sec-inner .room-content .room-content-inner ul li" ).each(function() {
        jQuery(this).css("transition-delay", 0.4*counter+'s');
        counter++;
      });
	}
	if ( jQuery('.front-page-1 .room-sec-inner .room-content .room-content-inner ul').length) {
      var counter = 0;
      jQuery( ".front-page-1 .room-sec-inner .room-content .room-content-inner ul li" ).each(function() {
        jQuery(this).css("transition-delay", 0.4*counter+'s');
        counter++;
      });
	}
	

	if (jQuery('.slider-caption-inner').length) {
		jQuery('.slider-caption-inner').addClass("inView");
	}
if (jQuery('.slider-cta-area').length) {
		jQuery('.slider-cta-area').addClass("inView");
	}

}

});