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
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});