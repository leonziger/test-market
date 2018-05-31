import $ from 'jquery';
import select2 from 'select2/dist/js/select2.full';


select2($);

$('.filter__selector select').select2({
  minimumResultsForSearch: -1
});

$('.filter__reset').click(function () {
  $(this).closest('form').find('select option').prop('selected', function () {
    return $(this).prop('defaultSelected');
  }).trigger('change');
});
