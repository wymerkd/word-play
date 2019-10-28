$(document).ready(function() {
  $('#user-input').submit(function(event) {
    event.preventDefault();
    $('#user-input').hide();
    var threeOrMoreChar = [];
    var noHome = [];
    var userSentence = $('#user-sentence').val();
    var splitSentence = userSentence.split(' ');
    splitSentence.forEach(function(word) {
      if (word.length >= 3) {
        threeOrMoreChar.push(word);
      } else {
        noHome.push(word);
      }
      var reverseThreeOrMoreChar = threeOrMoreChar.reverse().join(' ');
      $('#fav-list').text(reverseThreeOrMoreChar);
    });
  });
});
