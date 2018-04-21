$(function() {
    $('select').jselector();

  $('.top-contacts__button').click(function () {

    var $popup_offset =  ($(window).height() - $('.popup_courses').height())/2;

    $('.callback').css('top', $popup_offset).fadeIn('400');
    $('.wraper').fadeIn('400');

    $('.callback .callback_close').click(function() {
      $('.callback').fadeOut('400');
      $('.wraper').fadeOut('400');
    });

    return false;
  })
});
