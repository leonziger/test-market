import $ from 'jquery';
import toastr from 'toastr';

export default {
  validate() {
    return $('.enter__form').validate({
      submitHandler(form){
        console.log(form);
        toastr.success('Вы успешно подписаны на рассылку');
      }
    });
  }
};
