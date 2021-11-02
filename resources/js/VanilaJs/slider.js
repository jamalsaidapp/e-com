function backgroundStyle(){
    const bgSelector = $("[data-bg-img]");
    bgSelector.each(function (index, elem) {
        let element = $(elem),
            bgSource = element.data('bg-img');
        element.css('background-image', 'url(' + bgSource + ')');
    });
}
export const slideHero = () => {

    backgroundStyle()

    new Swiper(".default-slider-container", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 500,
        spaceBetween: 0,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: ".default-slider-container .swiper-button-next",
            prevEl: ".default-slider-container .swiper-button-prev",
        },
    });
}
