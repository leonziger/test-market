import $ from 'jquery';
import select2 from 'select2/dist/js/select2.full';
import { maskInput } from 'vanilla-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

select2($);

$('.filter__selector select').select2({
  minimumResultsForSearch: -1,
  dropdownCssClass: 'filter__selectorDropdown'
});

const pricesFields = document.querySelectorAll('.filter__prices input');

console.log(pricesFields);

var masked = [];

pricesFields.forEach(input => {
  masked.push(maskInput({
    inputElement: input,
    mask: createNumberMask({ prefix: '' })
  }));
});



// $('.filter__innerBlocks').validate({
//   rules: {
//     field: {
//       required: true,
//       number: true
//     }
//   }
// });
