$(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4
            }
        }
    ]
});