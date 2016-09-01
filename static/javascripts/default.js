$(document).ready(function() {
  // put your code here.
  $('.item[data-tab]').tab();
  $('.ui.sidebar').sidebar('attach events', '.toggle.item', 'toggle');
  $('.ui.dropdown').dropdown({on: 'hover'});
  $('table').addClass('ui striped collapsing table');
});
