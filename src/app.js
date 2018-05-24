import $ from 'jquery';
import select2 from 'select2';
import validate from 'jquery-validation';

import './components/menu-toggle/menu-toggle';
import './components/top/top';
import './components/modal/modal';
import './components/enter/enter';


select2($);

$('select').select2({
  minimumResultsForSearch: -1
});

$('.search').validate({
    rules: {
      main_search: {
        required: true
      }
    },
    messages: {},
    errorLabelContainer: '.search__error'
  });
