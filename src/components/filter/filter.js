import $ from 'jquery';
import select2 from 'select2/dist/js/select2.full';
import { maskInput } from 'vanilla-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import toastr from 'toastr';

select2($);

$('.filter__selector select').select2({
  minimumResultsForSearch: -1,
  dropdownCssClass: 'filter__selectorDropdown'
});

const pricesFields = document.querySelectorAll('.filter__prices input');

pricesFields.forEach(input => {
  maskInput({
    inputElement: input,
    mask: createNumberMask({
      prefix: '',
      allowDecimal: true
    })
  });
});

$('.filter__innerBlocks').submit(function (e) {
  e.preventDefault();

  const from = $(this).find('[name=price_from]');
  const to = $(this).find('[name=price_to]');

  if (to.val() < from.val()) {
    toastr.error('Начальная цена больше предельной!');
  }
});
