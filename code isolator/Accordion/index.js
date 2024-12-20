document.querySelectorAll('.accordion-title-unique').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        // Toggle visibility of the content
        content.classList.toggle('active');

        // Optionally close other sections if required
        document.querySelectorAll('.accordion-content-unique').forEach(section => {
            if (section !== content) {
                section.classList.remove('active');
            }
        });
    });
});