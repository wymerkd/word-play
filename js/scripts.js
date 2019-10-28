$(document).ready(function() {
  $('#user-input').submit(function(event) {
    event.preventDefault();
    $('#user-input').hide();
    var userSentence = $('#user-sentence').val();
    var splitSentence = userSentence.split(' ');
    splitSentence.forEach(function(word) {
    var result = splitSentence.filter(word => word.length > 3);
      var reverseThreeOrMoreChar = result.reverse().join(' ');
      $('#fav-list').text(reverseThreeOrMoreChar);
    });
  });
});
