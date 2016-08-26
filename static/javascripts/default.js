$(document).ready(function() {
  // put your code here.
  $('.item[data-tab]').tab();
  $('.ui.sidebar').sidebar('attach events', '.toggle.item', 'toggle')
});
