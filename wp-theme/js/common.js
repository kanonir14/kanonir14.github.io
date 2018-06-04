$(document).ready(function($) {
	// read more

  $("body").on('click', '.scroll-show', function (event) {
  	event.preventDefault();
    var height = 0;
    $(".scroll-inner > p").each(function() {
         height += parseInt($(this).height()); 
    });
    $(".scroll-inner").animate({height: height}, 300);
    $(this).css({
      opacity: '0',
      visibility: 'hidden'
    });
  });

  $(".hamburger").click(function(event) {
      
    if ( $(".nav").hasClass('is-open') ) {
      $(".nav").removeClass('is-open');
    } else {
      $(".nav").addClass('is-open');
    }

  });

});