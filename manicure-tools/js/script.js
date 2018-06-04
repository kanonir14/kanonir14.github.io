$(document).ready(function($) {
	$(".fancybox").fancybox({
	    helpers: {
	      overlay: {
	        locked: false
	      }
	    }
  	});

	scrollNav();
	navigation();

});

function scrollNav() {
	
	$(document).scroll(function() {

		var item = $("nav").offset().top,
			TOP_CONST = 50;	
		
		if ( item > TOP_CONST ) {
			$("nav").addClass('nav-scroll');
		} else {
			$("nav").removeClass('nav-scroll');
		}

	});
}

// scroll to block
function navigation() {
	$("a").click(function(even) {
		
		var item = $(this).attr('href'),
			item_top = $(item).offset().top,
			TOP_PADDING = 70;

		$("html, body").animate({scrollTop: item_top - TOP_PADDING}, 800);

		even.preventDefault();

		//console.log(item_top);

	});
}

