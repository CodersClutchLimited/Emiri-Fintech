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

function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const isOpen = content.classList.contains('open');
  // Close all open accordions
  document.querySelectorAll('.accordion-content.open').forEach(item => {
    item.classList.remove('open');
    item.previousElementSibling.classList.remove('open');
  });
  // Toggle the clicked accordion
  if (!isOpen) {
    content.classList.add('open');
    header.classList.add('open');
  }
}

function toggleAssetAccordion(header) {
  const content = header.nextElementSibling;
  const isOpen = content.classList.contains('open');
  // Close all open accordions
  document.querySelectorAll('.asset-accordion-content.open').forEach(item => {
    item.classList.remove('open');
    item.previousElementSibling.classList.remove('open');
  });
  // Toggle the clicked accordion
  if (!isOpen) {
    content.classList.add('open');
    header.classList.add('open');
  }
}

function toggleFintechAccordion(header) {
  const content = header.nextElementSibling;
  const isOpen = content.classList.contains('open');
  // Close all open accordions
  document.querySelectorAll('.fintech-accordion-content.open').forEach(item => {
    item.classList.remove('open');
    item.previousElementSibling.classList.remove('open');
  });
  // Toggle the clicked accordion
  if (!isOpen) {
    content.classList.add('open');
    header.classList.add('open');
  }
}

function toggleItSecurityAccordion(header) {
  const content = header.nextElementSibling;
  const isOpen = content.classList.contains('open');
  // Close all open accordions
  document.querySelectorAll('.it-security-accordion-content.open').forEach(item => {
    item.classList.remove('open');
    item.previousElementSibling.classList.remove('open');
  });
  // Toggle the clicked accordion
  if (!isOpen) {
    content.classList.add('open');
    header.classList.add('open');
  }
}

