document.querySelectorAll('.industry-accordion-header').forEach(item => {
    item.addEventListener('click', () => {
        const content = document.getElementById(item.dataset.target);
        const allContents = document.querySelectorAll('.industry-accordion-content');
        
        // Toggle the clicked content
        if (content.style.display === 'block') {
            content.style.display = 'none';
            item.classList.remove('active');
        } else {
            // Hide all content sections
            allContents.forEach(content => content.style.display = 'none');
            // Remove active class from all headers
            document.querySelectorAll('.industry-accordion-header').forEach(header => header.classList.remove('active'));
            
            // Show the clicked content and set it active
            content.style.display = 'block';
            item.classList.add('active');
        }
    });
});
