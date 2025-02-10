ScrollReveal({ reset: true });

// section below hero
ScrollReveal().reveal('.about-colo', {
    delay: 200,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    duration: 1000,
});

ScrollReveal().reveal('.colo-2', {
    delay: 300,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    duration: 1000,
});

// protocol section
ScrollReveal().reveal('.column-title-2', {
    delay: 200,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    duration: 1000,
});

ScrollReveal().reveal('.stat-card', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    easing: 'ease-in-out',
    duration: 1000,
});

// powered section
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
});

sr.reveal('.powered-paragraph', {
    interval: 200
});

sr.reveal('.powered-image', {
    origin: 'right',
    delay: 400
});

sr.reveal('.link-container', {
    origin: 'bottom',
    delay: 600
});

// map section
sr.reveal('.map-section', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200
});

sr.reveal('.map-itself', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 400
});

sr.reveal('.purple-circles', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    interval: 200
});

// find us container
ScrollReveal().reveal('.box', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    interval: 200
});