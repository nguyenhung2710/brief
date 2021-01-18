$(document).ready(function () {
    // Product
    $('.carousel').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.carousel-thumb',
    });
    $('.carousel-thumb').slick({
        slidesToShow: 5,
        //slidesToScroll: 3,
        asNavFor: '.carousel',
        //dots: true,
        centerMode: false,
        focusOnSelect: true,
    });

    // Slider main
    $('.carousel__item-main').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
});