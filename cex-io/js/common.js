$(document).ready(function () {


  $('body').on('click', '.toggle-button', function (e) {
    if($(this).parent().find('.toggle-menu').hasClass('is-open')){
      $('.toggle-menu').removeClass('is-open');
      $('.toggle-menu').parent().find('.triangle').removeClass('transform');
      $('.hamburger').css({
        backgroundImage: 'url(img/hamburger@2x.png)',
        width: '36px',
        height: '22px'
      });
    } else {
      $('.toggle-menu').removeClass('is-open');
      $(this).parent().find('.toggle-menu').addClass('is-open');

      if ($(this).hasClass('hamburger')) {
        $($(this)).css({
          backgroundImage: 'url(img/nav-close@2x.png)',
          width: '27px',
          height: '27px'
        });
      } else if ($(this).find('.triangle')) {
        $(this).find('.triangle').addClass('transform');
      }
    }

  });
  $('body').on('click', function (e) {
    
    if (!$(e.target).closest('.navigation').hasClass('navigation')) {
      $('.toggle-menu').removeClass('is-open');
       $('.toggle-menu').parent().find('.triangle').removeClass('transform');
       $('.hamburger').css({
        backgroundImage: 'url(img/hamburger@2x.png)',
        width: '36px',
        height: '22px'
      });
    }
  });
  
  // read more

  $("body").on('click', '.read-more', function (event) {

    // $(".review .container").css('height', 'auto');
    var height = 0;
    $(".review .container > div, .review .container > ul").each(function() {
         height += parseInt($(this).height()); 
    });
    $(".review .container").animate({height: height}, 500);
    $(".gradient").hide();
    $(this).css({
      opacity: '0',
      visibility: 'hidden'
    });

  });

});
