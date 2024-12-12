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