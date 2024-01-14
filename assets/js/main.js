$(document).ready(function(){
    $(".slider-area").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false
    });

    $(".testimonials").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        nav: false,
        margin: 30,
        center: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // init Isotope
    var $grid = $('.portfolio-items').isotope({
        // options
    });
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    $('.portfolio-menu').on( 'click', 'li', function() {
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    });

    $('.gallery-popup').magnificPopup(
        {
            type:'image',
            gallery: {
                enabled: true
            }
        }
    );
});

$(window).load(function() {
    $(this).on('scroll', function() {
        if($(this).scrollTop() > 50){
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    })
})