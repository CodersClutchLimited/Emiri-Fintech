// collapser
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('hidden');
}

// card carousel
var swiper = new Swiper('.cosmic-swiper', {
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

// contact expert section
let openContent = null;

// Add event listeners to all plus icons
const plusIcons = document.querySelectorAll('.plus-icon');
plusIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        const targetId = icon.getAttribute('data-target');
        const content = document.getElementById(targetId);

        // Close any other open content
        if (openContent && openContent !== content) {
            openContent.classList.add('hidden'); // Close the previous content
            toggleIcon(openContent.previousElementSibling.querySelector('.plus-icon'), true);
        }

        // Toggle the current content
        const isContentHidden = content.classList.toggle('hidden');
        toggleIcon(icon, isContentHidden);

        // Update the openContent tracker
        openContent = isContentHidden ? null : content;

        event.stopPropagation(); // Prevent the click from propagating to the body
    });
});

// Add a global click listener to close the open content when clicking elsewhere
document.addEventListener('click', () => {
    if (openContent) {
        openContent.classList.add('hidden'); // Hide the open content
        toggleIcon(openContent.previousElementSibling.querySelector('.plus-icon'), true); // Reset icon to plus
        openContent = null; // Reset tracker
    }
});

// Helper function to toggle the icon between plus and minus
function toggleIcon(icon, isClosed) {
    const iconElement = icon.querySelector('i'); // Select the <i> inside the span
    if (isClosed) {
        iconElement.classList.remove('ri-subtract-line'); // Remove minus icon
        iconElement.classList.add('ri-add-line'); // Add plus icon
    } else {
        iconElement.classList.remove('ri-add-line'); // Remove plus icon
        iconElement.classList.add('ri-subtract-line'); // Add minus icon
    }
}

