import $ from 'jquery';
import vex from 'vex-js';
import enter from '../enter/enter';


$('.main-header__auth-btn').click(function (e) {
  e.preventDefault();

  const modal = $(`[data-modal=enter]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

  let validator = {};

  vex.open({
    unsafeContent: modal.html(),
    closeClassName: 'modal__close',
    afterOpen() {
      validator = enter.validate();
    },
    afterClose() {
      validator.destroy();
    }
  });
});
