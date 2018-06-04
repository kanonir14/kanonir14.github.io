$(document).ready(function() {
	accordion();
	nav();
});

// sidebar accordion
function accordion() {
	$('.aside-ul li').on({ 
		click: function(){
			$(this).children('.dropdown-ul').toggle(300);
		}
	});
}

//navigation
function nav() {
	var hamburger = $('.hamburger'),
		nav = $('.nav-ul');

	hamburger.on({
		click: function(){

			if ( $(this).hasClass('active') ) {
				nav.animate({right: '0px'}, 300);
				hamburger.css('position', 'relative').animate({left: '-250px'}, 300);
				$(this).removeClass('active');
			} else {
				nav.animate({right: '-250px'}, 300);
				hamburger.css('position', 'relative').animate({left: '0px'}, 300);
				$(this).addClass('active');
			}
			
		}
	});

}