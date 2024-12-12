  document.addEventListener("DOMContentLoaded", () => {
    const dropdown1 = document.getElementById("dropdown1");
    const dropdown2 = document.getElementById("dropdown2");
    const jobItems = document.querySelectorAll(".job-item");

    function filterJobs() {
      const selectedCategory = dropdown1.value;
      const selectedLocation = dropdown2.value;

      jobItems.forEach(item => {
        const itemCategory = item.dataset.category;
        const itemLocation = item.dataset.location;

        // Check if the item matches the selected filters
        const matchesCategory = selectedCategory === "" || itemCategory === selectedCategory;
        const matchesLocation = selectedLocation === "" || itemLocation === selectedLocation;

        if (matchesCategory && matchesLocation) {
          item.style.display = "flex"; // Show item
        } else {
          item.style.display = "none"; // Hide item
        }
      });
    }

    // Attach event listeners to both dropdowns
    dropdown1.addEventListener("change", filterJobs);
    dropdown2.addEventListener("change", filterJobs);
  });
