// hero section
ScrollReveal().reveal('.why-p', {
    duration: 800,
    distance: '30px',
    origin: 'left',
    interval: 200,
    reset: true
});

ScrollReveal().reveal('.why-texter', {
    duration: 1000,
    distance: '40px',
    origin: 'right',
    delay: 500,
    reset: true
});

// logo section
ScrollReveal().reveal('.why-outer', {
    duration: 1000,
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.why-logo', {
    duration: 800,
    distance: '30px',
    origin: 'bottom',
    interval: 150,
    scale: 0.9,
    opacity: 0,
    reset: true
});


// descript section
ScrollReveal().reveal('.whyd-grid-container', {
    duration: 1000,
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.whyd-title', {
    duration: 800,
    distance: '40px',
    origin: 'left',
    delay: 300,
    opacity: 0,
    reset: true
});

ScrollReveal().reveal('.whyd-paragraph', {
    duration: 1000,
    distance: '40px',
    origin: 'left',
    delay: 500,
    opacity: 0,
    reset: true
});

ScrollReveal().reveal('.whyd-logo', {
    duration: 1000,
    distance: '50px',
    origin: 'right',
    delay: 600,
    scale: 0.9,
    opacity: 0,
    reset: true
});

// trust section
ScrollReveal().reveal('.trust-container', {
    duration: 1000,
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.trust-title', {
    duration: 800,
    distance: '30px',
    origin: 'top',
    delay: 300,
    opacity: 0
});

ScrollReveal().reveal('.trust-text', {
    duration: 1000,
    distance: '30px',
    origin: 'bottom',
    delay: 500,
    opacity: 0
});

// best section
// Reveal each best-container section with a fade-in effect
ScrollReveal().reveal('.best-container', {
    duration: 1000,
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    opacity: 0
});

// Slide in each section number for impact
ScrollReveal().reveal('.best-number', {
    duration: 800,
    distance: '40px',
    origin: 'left',
    delay: 300
});

// Animate section headers dynamically
ScrollReveal().reveal('.best-title', {
    duration: 1000,
    distance: '30px',
    origin: 'top',
    delay: 400
});

// Staggered animation for each column
ScrollReveal().reveal('.best-column', {
    duration: 1000,
    distance: '40px',
    origin: 'bottom',
    delay: 500,
    interval: 200
});

// Icon images fade in with a slight zoom effect
ScrollReveal().reveal('.best-column img', {
    duration: 800,
    scale: 0.9,
    delay: 600
});


const sr = ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 1000,
    delay: 200,
    origin: 'bottom'
});

// Logo items with staggered reveal
sr.reveal('.logo-item', {
    interval: 200,
    easing: 'ease-out',
    scale: 0.95
});

// Last section with different animation
sr.reveal('.why-last-container', {
    delay: 400,
    origin: 'top',
    distance: '30px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});