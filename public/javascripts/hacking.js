var swiper = new Swiper('.cosmic-swiper-video', {
    slidesPerView: 3, // Default number of slides per view
    spaceBetween: 30, // Default space between slides
    loop: true,  // Enable looping
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.stellar-button-next',
        prevEl: '.stellar-button-prev',
    },
    breakpoints: {
        320: { // For small screens (e.g., smartphones)
            slidesPerView: 1,
            spaceBetween: 10,
        },
        730: { // For medium screens (e.g., tablets)
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: { // For larger screens (e.g., desktops)
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
