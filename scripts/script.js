$(document).ready(function(){
    //Header top notification slider
$(".scrolling-news").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
})

    //Hero lider
$(".hero").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
})
})