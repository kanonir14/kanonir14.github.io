$(document).ready(function() {
	var li = $(".maps__list li");

	$(li).click(function(event) {

		$(this).find(".sub-menu").toggle('fast');

	});

	// owl carousel media max-width 768
	if ( $(document).width() <= 768 ) {
		$(".owl-carousel").owlCarousel({
			loop:true,
			autoplay: true,
			margin: 10,
		    responsiveClass:true,
		    dots: true,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        767:{
		            items:1,
		            nav:false
		        }
		    }
		});
	}

	// scroll top

	$(".arrow").click(function(event) {

		var k = $("body").offset().top;
		
		$("html, body").animate({scrollTop: k}, 500);

		event.preventDefault();
	});
});