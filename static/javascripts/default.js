// init quotes
function get_random_int(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function json_to_quote(data) {
  var random = get_random_int(0, data.length - 1);
  var word = data[random];
  var quote = "";
  if (typeof word["content"] === 'string') {
    quote = '<p>' + word["content"] + '</p>';
  }
  else {                        // an array of strings
    for(var i = 0; i < word["content"].length; i++) {
      console.log(word["content"][i]);
      quote += '<p>' + word["content"][i] + '</p>';
    }
  }
  quote += '<footer>' + word["author"];
  quote += " <cite>" + word["from"] + "</cite>";
  return quote;
}

$(document).ready(function() {
  // put your code here.
  $('.item[data-tab]').tab();
  $('.ui.sidebar').sidebar('attach events', '.toggle.item', 'toggle');
  $('.ui.dropdown').dropdown({on: 'hover'});
  $('table').addClass('ui striped collapsing table');

  $(".words-cn").html(json_to_quote($('#quotes').data('quotes-cn')));
  $(".words-en").html(json_to_quote($('#quotes').data('quotes-en')));
});
