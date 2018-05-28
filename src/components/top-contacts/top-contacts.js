import $ from 'jquery';
import vex from 'vex-js';
import callback from '../callback/callback';


$('.top-contacts__button').click(function (e) {
  e.preventDefault();

  const modal = $(`[data-modal=callback]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

  vex.open({
    unsafeContent: modal.html(),
    closeClassName: 'modal__close'
  });
});
