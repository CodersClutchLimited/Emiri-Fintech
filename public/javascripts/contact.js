
document.addEventListener("DOMContentLoaded", () => {
    const iconBoxes = document.querySelectorAll(".icon-box");
    
    iconBoxes.forEach((box, index) => {
      // Apply staggered animation delay
      box.style.animationDelay = `${index * 0.3}s`;
    });
  });