const stickyBox = document.querySelector('.sticky-box');
const stickyOffset = stickyBox.offsetTop; // Get the initial position

window.addEventListener('scroll', function() {
    // Check the current scroll position
    if (window.pageYOffset >= stickyOffset) {
        // If scrolled past initial position, make the element sticky
        stickyBox.style.position = 'fixed';
        stickyBox.style.top = '20px'; // Keep it at a fixed position from the top
    } else {
        // If scrolled back up, remove the sticky effect
        stickyBox.style.position = 'absolute';
        stickyBox.style.top = `${stickyOffset}px`; // Reset to the original position
    }
});