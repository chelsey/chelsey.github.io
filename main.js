$(function () {
  $('.fa-navigation').delay(1700).fadeTo(1000, 1, function() {
    $('.fa-navigation').addClass('pulse');
  });

  $(window).scroll(function(){
    $('.fa-navigation').each(function(){
      var navigatorPosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();

      if (topOfWindow > navigatorPosition-100) {
        $(this).removeClass('pulse');
      }
    });

    $('.portfolio-row').each(function(){
      var navigatorPosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();

      if (topOfWindow > navigatorPosition - $(this).height() ) {
        $(this).addClass('reveal');
        $(this).css({opacity: 1});
      }
    });
  });
});