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