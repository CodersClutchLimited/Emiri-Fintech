var swiper = new Swiper('.cosmic-swiper-video', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.stellar-button-next',
        prevEl: '.stellar-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10,
        },
        730: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
        }
    },
    on: {
        init: function () {
            const slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(slide => slide.classList.remove('active-slide'));

            const activeSlide = document.querySelector('.swiper-slide.swiper-slide-active');
            if (activeSlide) {
                activeSlide.classList.add('active-slide');
            }
        },
        transitionStart: function () {
            const slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(slide => slide.classList.remove('active-slide'));

            const activeSlide = document.querySelector('.swiper-slide.swiper-slide-active');

            if (activeSlide) {
                activeSlide.classList.add('active-slide');
            }
        },
        slideChangeTransitionEnd: function () {
            const slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(slide => slide.classList.remove('active-slide'));

            const activeSlide = document.querySelector('.swiper-slide.swiper-slide-active');

            if (activeSlide) {
                activeSlide.classList.add('active-slide');
            }
        }
    }
});
