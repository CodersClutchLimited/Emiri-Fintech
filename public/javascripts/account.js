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
let allExpanded = false; // Flag to track if all sections are expanded

// Function to toggle a single section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const iconSpan = section.previousElementSibling.querySelector('span');
    
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden'); // Show section
        iconSpan.textContent = '−'; // Change icon to minus
    } else {
        section.classList.add('hidden'); // Hide section
        iconSpan.textContent = '+'; // Change icon to plus
    }
}

// Function to toggle all sections (expand or collapse)
function toggleAllSections(event) {
    event.preventDefault(); // Prevent default anchor behavior

    const sections = document.querySelectorAll('.border-b .mt-2');
    const icons = document.querySelectorAll('.border-b span');
    const expandCollapseLink = event.target;

    if (allExpanded) {
        // Collapse all sections
        sections.forEach((section, index) => {
            section.classList.add('hidden'); // Hide section
            icons[index].textContent = '+'; // Change icon to plus
        });
        expandCollapseLink.innerHTML = 'Expand All'; // Change text to "Expand All"
    } else {
        // Expand all sections
        sections.forEach((section, index) => {
            section.classList.remove('hidden'); // Show section
            icons[index].textContent = '−'; // Change icon to minus
        });
        expandCollapseLink.innerHTML = 'Collapse All'; // Change text to "Collapse All"
    }

    allExpanded = !allExpanded; // Toggle the state
}
