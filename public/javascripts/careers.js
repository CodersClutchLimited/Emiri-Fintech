document.addEventListener('DOMContentLoaded', function() {
  const dropdown1 = document.getElementById('dropdown1');
  const dropdown2 = document.getElementById('dropdown2');
  const jobList = document.getElementById('job-list');
  const jobItems = document.querySelectorAll('.job-item');

  function filterJobs() {
    const categoryFilter = dropdown1.value;
    const locationFilter = dropdown2.value;

    jobItems.forEach(job => {
      const jobCategory = job.getAttribute('data-category');
      const jobLocation = job.getAttribute('data-location');

      const matchesCategory = categoryFilter ? jobCategory === categoryFilter : true;
      const matchesLocation = locationFilter ? jobLocation === locationFilter : true;

      if (matchesCategory && matchesLocation) {
        job.style.display = 'flex';
      } else {
        job.style.display = 'none';
      }
    });
  }

  dropdown1.addEventListener('change', filterJobs);
  dropdown2.addEventListener('change', filterJobs);

  filterJobs();
});