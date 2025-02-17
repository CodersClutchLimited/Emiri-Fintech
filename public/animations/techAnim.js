ScrollReveal().reveal('.image-digi', {
    duration: 1000,
    origin: 'left',
    distance: '40px',
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.white-r', {
    duration: 1200,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 300
  });
  
ScrollReveal().reveal('.mini-card', {
    duration: 1000,
    origin: 'bottom',
    distance: '30px',
    easing: 'ease-in-out',
    interval: 150
  });

  // Animate the left content area from the left
  ScrollReveal().reveal('.cloud-hider', {
    duration: 1200,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'
  });

  // Animate the right side (AWS services) from the right with a slight delay
  ScrollReveal().reveal('#right-side-content', {
    duration: 1200,
    origin: 'right',
    distance: '50px',
    easing: 'ease-in-out',
    delay: 200
  });