document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".h2-section, .h3-section, .h4-section, .h5-section, .h6-section, p");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Ensures fade-out when scrolling out
        }
      });
    }, { threshold: 0.1 }); // 0.1 means when 10% of the element is visible
  
    elements.forEach(element => observer.observe(element));
  });
  