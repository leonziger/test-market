import $ from 'jquery';
// import 'jquery-validation';

$('.enter__form').validate({
  messages: {
    email:{
      email: 'Введите правильный e-mail',
      required: 'Это обязательное поле!'
    }
  }
});

console.log($('.enter__form'));
