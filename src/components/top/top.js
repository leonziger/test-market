import $ from 'jquery';


$('.left-menu__header').click(function () {
  $(this).toggleClass('left-menu__header_active');
  $($(this).attr('data-target')).toggleClass('is-open');
});
