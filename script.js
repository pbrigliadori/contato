document.addEventListener('DOMContentLoaded', function () {
  var botao4 = document.getElementById('git')
  var botao1 = document.getElementById('inst');
  var botao2 = document.getElementById('tl');
  var botao3 = document.getElementById('tt');
  var url1 = 'https://github.com/pbrigliadori';
  var url2 = 'https://www.instagram.com/pbrigliadori/';
  var url3 = 'https://twitter.com/yuk1zin';

  botao1.addEventListener('click', function () {
    window.open(url2, '_blank');
  });

  /*botao2.addEventListener('click', function () {
    window.open(url3, '_blank');
  });*/

  botao3.addEventListener('click', function () {
    window.open(url3, '_blank');
  });

  botao4.addEventListener('click', function () {
    window.open(url1)
  })

});
