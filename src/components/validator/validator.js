import $ from 'jquery';
import 'jquery-validation';
import 'jquery-validation/dist/localization/messages_ru';


$.validator.setDefaults({
  debug: true,
  errorElement: 'div',
  errorPlacement(error, element) {
    const placement = $($(element).data('msg-container'));

    if (placement.length) {
      placement.text($(error).text());
    } else {
      error.insertAfter(element);
    }
  }
});
