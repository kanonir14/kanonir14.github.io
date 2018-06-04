$(document).ready(function() {

	// owl carousel
	$('.main-slider, .slider-two').owlCarousel({
	    loop:true,
	    dots: true,
	    margin:10,
	    autoplay: true,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        1000:{
	            items:1,
	            nav:false,
	            loop:true
	        }
	    }
	})

	// tabs
	$("#tabs").tabs();

	// scroll
	$('.scroll').click(function(e){
		e.preventDefault();
	     var id = $(this).attr('href');
	     var top = $(id).offset().top;
	    $('html, body').animate({scrollTop: top}, 500);
	  
	});
});