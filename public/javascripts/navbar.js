document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const megaMenu = item.querySelector('.mega-menu');
    if (megaMenu) megaMenu.style.display = 'flex';
  });

  item.addEventListener('mouseleave', () => {
    const megaMenu = item.querySelector('.mega-menu');
    if (megaMenu) megaMenu.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  function toggleAccordion(header, contentClass) {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('open');

    // Close all open accordions across all groups
    document.querySelectorAll('.open').forEach(item => {
      item.classList.remove('open');
    });

    // Open the clicked accordion if it wasn't already open
    if (!isOpen) {
      content.classList.add('open');
      header.classList.add('open');
    }
  }

  // Attach event listeners to each accordion header for all categories
  const allHeaderClasses = [
    { headerClass: 'accordion-header', contentClass: 'accordion-content' },
    { headerClass: 'asset-accordion-header', contentClass: 'asset-accordion-content' },
    { headerClass: 'fintech-accordion-header', contentClass: 'fintech-accordion-content' },
    { headerClass: 'it-security-accordion-header', contentClass: 'it-security-accordion-content' }
  ];

  allHeaderClasses.forEach(group => {
    document.querySelectorAll(`.${group.headerClass}`).forEach(header => {
      header.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent closing when clicking on the accordion header
        toggleAccordion(header, group.contentClass);
      });
    });
  });

  // Close all open accordions when clicking outside of them
  document.addEventListener('click', () => {
    document.querySelectorAll('.open').forEach(item => {
      item.classList.remove('open');
    });
  });
});


const navbar = document.querySelector('.sticky-navbar');
const stickyOffset = navbar.offsetTop;

// Create a placeholder element
const placeholder = document.createElement('div');
placeholder.style.height = `${navbar.offsetHeight}px`;

// Add scroll event listener
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= stickyOffset) {
    // Add the placeholder to maintain layout
    if (!navbar.nextElementSibling?.isSameNode(placeholder)) {
      navbar.parentNode.insertBefore(placeholder, navbar.nextSibling);
    }
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.width = '100%';
  } else {
    // Remove the placeholder when not sticky
    if (navbar.nextElementSibling?.isSameNode(placeholder)) {
      navbar.parentNode.removeChild(placeholder);
    }
    navbar.style.position = '';
  }
});
