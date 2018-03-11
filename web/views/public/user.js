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

function switchLang() {
  var match = window.location.search.match(/lang=/);
  if(match)
    window.location.search = ''
  else
    window.location.search = '?lang=zh'
}