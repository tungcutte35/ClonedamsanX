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
$(".slick-dots li").html('<a href="#"><img src="slide-dot.png" /></a>');
$(".slick-dots li.slick-active").html(
  '<a href="#"><img src="slide-dot-active.png" /></a>'
);
