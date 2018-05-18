import $ from 'jquery';
import select2 from 'select2';

import './components/menu-toggle/menu-toggle';
import './components/top/top';
import './components/modal/modal';
import './components/callback/callback';


select2($);

$('select').select2({
  minimumResultsForSearch: -1
});
