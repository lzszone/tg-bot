$(function() {
  var token = new Clipboard('#token');
  var link = new Clipboard('#link');
  var info = $('#token').attr('data-info');
  link.on('success', function(e) {
    alert(info)
  });
  token.on('success', function(e) {
    alert(info)
  })
})