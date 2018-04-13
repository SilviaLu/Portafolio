(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

$(document).ready(function() {

$('.github-motivame').click(function() {
  window.open('https://github.com/SilviaLu/Reto-Motivame');
});

$('.demo-motivame').click(function() {
  window.open('https://marvelapp.com/3b3j8e3/screen/40124861');
});
$('.github-yaku').click(function() {
  window.open('https://github.com/SilviaLu/banco-100--digital');
});

$('.demo-yaku').click(function() {
  window.open('https://marvelapp.com/14bagcc6');
});
$('.github-car').click(function() {
  window.open('https://github.com/SilviaLu/banco-100--digital');
});

$('.demo-car').click(function() {
  window.open('https://marvelapp.com/14bagcc6');
});
});