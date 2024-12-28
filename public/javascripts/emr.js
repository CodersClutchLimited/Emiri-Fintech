document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation items
    const navItems = document.querySelectorAll(".indivi-nav-item");
    
    // Select all course containers
    const courseContainers = document.querySelectorAll(".indivi-container");

    // Add click event listener to each navigation item
    navItems.forEach(navItem => {
        navItem.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            // Remove 'active' class from all nav items
            navItems.forEach(item => item.classList.remove("active"));

            // Add 'active' class to the clicked nav item
            this.classList.add("active");

            // Hide all course containers
            courseContainers.forEach(container => {
                container.style.display = "none";
            });

            // Show the course container that matches the selected category
            const activeContainer = document.querySelector(`.indivi-container[data-category="${category}"]`);
            if (activeContainer) {
                activeContainer.style.display = "flex";
            }
        });
    });

    // Set default active tab and section
    const defaultCategory = "all"; // Change to a specific category if needed
    const defaultNavItem = document.querySelector(`.indivi-nav-item[data-category="${defaultCategory}"]`);
    const defaultContainer = document.querySelector(`.indivi-container[data-category="${defaultCategory}"]`);

    if (defaultNavItem) {
        defaultNavItem.classList.add("active"); // Add active class to default nav item
    }
    if (defaultContainer) {
        defaultContainer.style.display = "flex"; // Display the default container
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation items
    const uniqueNavLinks = document.querySelectorAll(".unique-indivi-nav-item");
    
    // Select all course sections
    const uniqueCourseSections = document.querySelectorAll(".unique-indivi-container");

    // Add click event listener to each navigation item
    uniqueNavLinks.forEach(link => {
        link.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-category");

            // Remove 'active' class from all navigation links
            uniqueNavLinks.forEach(nav => nav.classList.remove("active"));

            // Add 'active' class to the clicked navigation link
            this.classList.add("active");

            // Hide all course sections
            uniqueCourseSections.forEach(section => {
                section.style.display = "none";
            });

            // Show the course section that matches the selected category
            const matchingSection = document.querySelector(`.unique-indivi-container[data-category="${selectedCategory}"]`);
            if (matchingSection) {
                matchingSection.style.display = "flex";
            }
        });
    });

    // Set default active tab and section
    const defaultCategory = "all"; // Change to a specific category if needed
    const defaultNavLink = document.querySelector(`.unique-indivi-nav-item[data-category="${defaultCategory}"]`);
    const defaultSection = document.querySelector(`.unique-indivi-container[data-category="${defaultCategory}"]`);

    if (defaultNavLink) {
        defaultNavLink.classList.add("active"); // Add active class to default navigation link
    }
    if (defaultSection) {
        defaultSection.style.display = "flex"; // Display the default section
    }
});
