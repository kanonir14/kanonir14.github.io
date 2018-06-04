$(document).ready(function() {
	
	var hamburger = $(".hamburger"),
		nav_close = $(".nav-close"),
		nav = $(".hero-nav");

	hamburger.on('click', function(event) {
		nav.animate({right: 0}, 500);
		event.preventDefault();
		/* Act on the event */
	});

	nav_close.on('click', function(event) {
		nav.animate({right: '-90%'}, 500);
		event.preventDefault();
		/* Act on the event */
	});

});