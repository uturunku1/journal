var Entry= require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var word_count = entry.getNumWords();
    $('#display').append(word_count);
  }
})
