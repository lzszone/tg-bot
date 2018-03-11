$(function() {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', function(e) {
    var addr = $('#address');
    var address = addr.val();
    var errorMessage = addr.attr('data-error-message');
    if(!isAddress(address)) {
      e.preventDefault();
      alert(errorMessage)
    }
  })
})

function switchLang() {
  var query = window.location.search;
  var inviteToken = query.match(/inviteToken=[^&]*/);
  var lang = query.match(/lang=[^&]*/);
  var search = '?';
  if(inviteToken) {
    search += inviteToken[0];
  }
  if(!lang) {
    search += '&lang=zh'
  }
  window.location.search = search;
}