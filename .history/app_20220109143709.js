$(document).ready(function () {
  $(".intro-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
  });
});
$(".slider").slick({
  dots: true,
  customPaging: function (slider, i) {
    return '<a href="#"><img src="slide-dot.png" /><img src="slide-dot-active.png" /></a>';
  },
});
