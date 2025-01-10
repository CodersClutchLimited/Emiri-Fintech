document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.parentElement.nextElementSibling;
        const isVisible = content.style.display === 'block';
        const icon = button.querySelector('.toggle-icon');

        // Close all accordion contents and reset icons
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = 'none';
        });

        document.querySelectorAll('.toggle-icon').forEach(icon => {
            icon.classList.remove('rotate');
        });

        // Toggle the clicked accordion content and icon
        if (!isVisible) {
            content.style.display = 'block';
            icon.classList.add('rotate');
        }
    });
});
