$(function () {
  $('.fa-navigation').delay(1700).fadeTo(1000, 1, function() {
    $('.fa-navigation').addClass('pulse')
  });

  $(window).scroll(function(){
    $('.fa-navigation').removeClass('pulse')

    if ($(window).scrollTop() > $('.fade-container').offset().top + 50) {
      $('.fa-navigation').animate({opacity:0});
    }
  });
});