document.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;
  let h1 = document.querySelector(".h1-section");

  let minSize = 20;  // Smaller font size when scrolled
  let maxSize = 150; // Original font size
  let triggerScroll = 50; // Scroll position where it snaps

  if (scrollPos >= triggerScroll) {
    h1.style.position = "fixed";
    h1.style.top = "0px"; 
    h1.style.left = "20px"; 
    h1.style.fontSize = `${minSize}px`;
    h1.style.padding = "0";
  } else {
    h1.style.position = "relative";
    h1.style.top = "450px";
    h1.style.left = "50px";
    h1.style.fontSize = `${maxSize}px`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".h2-section, .h3-section, .h4-section, .h5-section, .h6-section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in"); // Add fade-in class
      } else {
        entry.target.classList.remove("fade-in"); // Remove on scroll-out (optional)
      }
    });
  }, { threshold: 0.1 }); // Trigger when 20% of the element is visible

  fadeElements.forEach(el => observer.observe(el));
});



document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
});
