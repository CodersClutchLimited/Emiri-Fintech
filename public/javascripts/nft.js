document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.cosmic-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.stellar-button-next',
            prevEl: '.stellar-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 10 },
            730: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
        },
    });
});
