// Oculta el logo al iniciar, luego de un tiempo determinado.


// $(function () {
//   setTimeout(function () {
//     $('.loader').fadeOut(500);
//   }, 3000);
// });

$(document).ready(function () {
  var altura = $('.menu').offset().top;
  // alert(altura);
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > altura) {
      $('.menu').addClass('menu-fixed');

    } else {
      $('.menu').removeClass('menu-fixed');
    }
  })
});