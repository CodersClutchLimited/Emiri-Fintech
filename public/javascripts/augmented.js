const tabElements = document.querySelectorAll('.core-tab');
const contentSections = document.querySelectorAll('.core-content > div');

tabElements.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.core-tab.active').classList.remove('active');
        tab.classList.add('active');

        document.querySelector('.core-content > div.active').classList.remove('active');
        document.getElementById(tab.dataset.target).classList.add('active');
    });
});

