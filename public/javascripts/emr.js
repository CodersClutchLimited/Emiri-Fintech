document.addEventListener("DOMContentLoaded", function () {
    // Select individual navigation items and containers
    const indiviNavItems = document.querySelectorAll(".indivi-nav-item");
    const indiviCourseContainers = document.querySelectorAll(".indivi-container");

    indiviNavItems.forEach(navItem => {
        navItem.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            // Remove 'active' class from all nav items
            indiviNavItems.forEach(item => item.classList.remove("active"));

            // Add 'active' class to the clicked nav item
            this.classList.add("active");

            // Hide all course containers
            indiviCourseContainers.forEach(container => {
                container.style.display = "none";
            });

            // Show the course container that matches the selected category
            const activeContainer = document.querySelector(`.indivi-container[data-category="${category}"]`);
            if (activeContainer) {
                activeContainer.style.display = "flex";
            }
        });
    });

    // Set default active tab and section for Individual
    const defaultIndiviCategory = "all";
    const defaultIndiviNavItem = document.querySelector(`.indivi-nav-item[data-category="${defaultIndiviCategory}"]`);
    const defaultIndiviContainer = document.querySelector(`.indivi-container[data-category="${defaultIndiviCategory}"]`);

    if (defaultIndiviNavItem) {
        defaultIndiviNavItem.classList.add("active");
    }
    if (defaultIndiviContainer) {
        defaultIndiviContainer.style.display = "flex";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Select organization navigation items and containers
    const orgNavItems = document.querySelectorAll(".unique-indivi-nav-item");
    const orgCourseContainers = document.querySelectorAll(".unique-indivi-container");

    orgNavItems.forEach(navItem => {
        navItem.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            // Remove 'active' class from all nav items
            orgNavItems.forEach(item => item.classList.remove("active"));

            // Add 'active' class to the clicked nav item
            this.classList.add("active");

            // Hide all course containers
            orgCourseContainers.forEach(container => {
                container.style.display = "none";
            });

            // Show the course container that matches the selected category
            const activeContainer = document.querySelector(`.unique-indivi-container[data-category="${category}"]`);
            if (activeContainer) {
                activeContainer.style.display = "flex";
            }
        });
    });

    // Set default active tab and section for Organization
    const defaultOrgCategory = "all";
    const defaultOrgNavItem = document.querySelector(`.unique-indivi-nav-item[data-category="${defaultOrgCategory}"]`);
    const defaultOrgContainer = document.querySelector(`.unique-indivi-container[data-category="${defaultOrgCategory}"]`);

    if (defaultOrgNavItem) {
        defaultOrgNavItem.classList.add("active");
    }
    if (defaultOrgContainer) {
        defaultOrgContainer.style.display = "flex";
    }
});
