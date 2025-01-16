document.addEventListener("DOMContentLoaded", () => {
  const iconBoxes = document.querySelectorAll(".icon-box");

  iconBoxes.forEach((box) => {
    const dropdown = box.querySelector(".dropdown-box");

    // Handle click to toggle dropdown visibility
    box.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = dropdown.style.display === "block";

      // Close all dropdowns
      document.querySelectorAll(".dropdown-box").forEach((db) => {
        db.style.display = "none";
      });

      // Toggle the current dropdown
      dropdown.style.display = isActive ? "none" : "block";
    });

    // Reset inline style on mouse enter to prioritize hover behavior
    box.addEventListener("mouseenter", () => {
      dropdown.style.display = ""; // Remove inline style
    });

    // Handle mouse leave
    box.addEventListener("mouseleave", () => {
      dropdown.style.display = ""; // Remove inline style again to ensure hover works
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-box").forEach((db) => {
      db.style.display = "none";
    });
  });
});
