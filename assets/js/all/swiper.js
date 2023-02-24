const swiper = new Swiper('.swiper', {
    // Optional parameters
    // rewind: true,
    keyboard: {
        enabled: true,
    },
    effect: "fade",
    // loop: "infinite",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        type: "progressbar",
        // dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.on('slideChange', function(sld) {
	document.body.setAttribute('data-sld', sld.realIndex);
})