import $ from 'jquery';
import select2 from 'select2';

import './components/menu-toggle/menu-toggle';


select2($);

$('select').select2({
  minimumResultsForSearch: -1
});
