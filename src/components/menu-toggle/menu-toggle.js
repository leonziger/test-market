import $ from 'jquery';

$('button').click(function () {
  return false;
});

$('.menu-toggle').click(function () {
  $(this).toggleClass('menu-toggle_active');
  $($(this).attr('data-target')).toggleClass('is-open');
});
