(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);

$('.col').slick({
  slidesToShow: 4, //сколько слайдов показывать в карусели
  slidesToScroll: 4, // сколько слайдов прокручивать за раз
  dots: true
});