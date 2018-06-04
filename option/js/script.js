$(document).ready(function () {
  var click = '';
  var wmmenu = $(document).width() - $('.slide-menu').width();
  $('.mmenu').css({width: wmmenu});
  if ($(document).width() <= 1100) click = 'click';
  $('.hamburger').on(click, function () {
    if ($(this).hasClass('active')) {
      $('.slide-menu').animate({left: '-295px'}, 500);
      $('nav').animate({left: 0}, 500);
      $(this).removeClass('active');
    } else {
      $('.slide-menu').animate({left: 0}, 500);
      $('nav').animate({left: 294}, 500);
      $(this).addClass('active');
      $('.mmenu').show();
    }
  }); // +
  $('.mmenu').on('click', function () {
    $('.slide-menu').animate({left: '-295px'}, 500);
    $('nav').animate({left: 0}, 500);
    $('.hamburger').removeClass('active');
    $('.mmenu').hide();
  });
  $('.header-ul > li > div').on(click, function () {
    if ($(this).closest('li').find('ul').css('display') == 'none') {
      $(this).closest('li').find('ul').show('400');
    } else {
      $(this).closest('li').find('ul').hide('400');
    }
  }); //+
  $('i.close, div.opacity').on('click', function () {
    $('.modal-form, div.opacity').hide();
  });
  $('a.open-modal').on('click', function () {
    var act = $(this).attr('data-action');
    if (act == 'reset') $('.modal-form').hide();
    $('div.opacity, .modal-form.' + act).show();
  });
});