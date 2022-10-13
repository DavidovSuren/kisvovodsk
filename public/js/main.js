/**
 * Accessibility-ready responsive menu.
 *
 */

(function ($) {
	
		$(".slider-carousel").slick({
			autoplay: true,
			autoplaySpeed:3500,
			speed: 1000,
			dots: true,
			fade: true,
			mobileFirst:true,
			lazyLoad: 'ondemand',
			lazyLoadBuffer: 0,

		});

		$("#testimonial_slide-15").slick({
			autoplay: true,
			autoplaySpeed:4500,
			//fade: true,
			dots: true,
			speed: 1650,
			adaptiveHeight: true,
			mobileFirst:true,
			lazyLoad: 'ondemand',
			lazyLoadBuffer: 0,
			slidesToShow: 1,

		});



	    $(".newseventss").slick({
	    	autoplay: true,
	    	autoplaySpeed:3500,
	    	//fade: true,
	    	dots: false,
	    	speed: 1250,
	    	adaptiveHeight: true,
	    	mobileFirst:true,
	    	lazyLoad: 'ondemand',
	    	lazyLoadBuffer: 0,
	    	 slidesToShow: 1,
	    	 prevArrow: '<div class="prev-arrow"><i class="icofont-rounded-left"></i></div>',
	    	 nextArrow: '<div class="next-arrow"><i class="icofont-rounded-right"></i></div>',
	    	  responsive: [
	    	  {
	    	    breakpoint: 1024,
	    	    settings: {
	    	    	arrows: true,
	    	    	slidesToShow: 5
	    	    }
	    	  },
	    	    {
	    	      breakpoint: 768,
	    	      settings: {
	    	        arrows: true,
	    	        slidesToShow: 4
	    	      }
	    	    },
	    	    {
	    	      breakpoint: 600,
	    	      settings: {
	    	        arrows: true,
	    	        slidesToShow: 3
	    	      }
	    	    },
	    	    {
	    	      breakpoint: 480,
	    	      settings: {
	    	        arrows: true,
	    	        slidesToShow: 1
	    	      }
	    	    }
	    	  ]

	    });

})(jQuery);








