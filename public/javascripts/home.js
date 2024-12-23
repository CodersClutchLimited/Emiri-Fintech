document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("auto-slider");
  const sliderChildren = [...slider.children];

  // Clone slides to ensure seamless scrolling
  sliderChildren.forEach((child) => {
    const clone = child.cloneNode(true);
    slider.appendChild(clone);
  });

  let scrollAmount = 0;

  function scrollSlider() {
    scrollAmount -= 1; // Adjust speed (higher negative value for faster scroll)
    if (Math.abs(scrollAmount) >= sliderChildren[0].offsetWidth) {
      scrollAmount = 0; // Reset scroll amount when a full slide has passed
      slider.appendChild(slider.children[0]); // Move first element to the end
    }
    slider.style.transform = `translateX(${scrollAmount}px)`; // Corrected this line
    requestAnimationFrame(scrollSlider);
  }

  scrollSlider();
});

 // JavaScript for carousel functionality
const controls = document.querySelectorAll('.control-line');
const contentSlides = document.querySelectorAll('#content-carousel .carousel-item');
const imageSlides = document.querySelectorAll('#image-carousel .carousel-item');

function updateCarousel(index) {
  contentSlides.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index);
  });
  imageSlides.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index);
  });

  controls.forEach((control, i) => {
    control.classList.toggle('active', i === index);
  });
}

// Attach event listeners to controls
controls.forEach((control, index) => {
  control.addEventListener('click', () => updateCarousel(index));
});

// Initialize with the first slide visible and the first control active
updateCarousel(0);

// last section's carousel functionality

new Swiper('.swiper', {
  loop: true,
  spaceBetween: 110,

  // Pagination configuration
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});

const indicatorButtons = document.querySelectorAll('.carousel-indicator');
const testimonialSlides = document.querySelectorAll('#testimonial-carousel .carousel-slide');
const imageCarouselSlides = document.querySelectorAll('#image-carousel .carousel-slide');  // If image-carousel is used

function switchSlide(activeIndex) {
  testimonialSlides.forEach((slide, index) => {
    slide.classList.toggle('hidden', index !== activeIndex);
  });
  imageCarouselSlides.forEach((slide, index) => {
    slide.classList.toggle('hidden', index !== activeIndex);
  });

  indicatorButtons.forEach((button, index) => {
    button.classList.toggle('active', index === activeIndex);
  });
}

// Attach event listeners to indicator buttons
indicatorButtons.forEach((button, index) => {
  button.addEventListener('click', () => switchSlide(index));
});

// Initialize with the first slide visible and the first indicator active
switchSlide(0);
