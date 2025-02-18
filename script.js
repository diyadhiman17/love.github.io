document.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;
  let h1 = document.querySelector(".h1-section");

  let isMobile = window.innerWidth <= 768; // Check if screen is small

  let minSize = isMobile ? 14 : 20; // Smaller font for mobile
  let maxSize = isMobile ? 80 : 150; // Adjusted max size for mobile
  let triggerScroll = 50;

  if (scrollPos >= triggerScroll) {
    h1.style.position = "fixed";
    h1.style.top = "0px"; 
    h1.style.left = "20px"; 
    h1.style.fontSize = `${minSize}px`;
    h1.style.padding = "0";
  } else {
    h1.style.position = "relative";
    h1.style.top = isMobile ? "450px" : "450px"; // Adjust top position for mobile
    h1.style.left = "50px";
    h1.style.fontSize = `${maxSize}px`;
  }
});

// Update styles on window resize to ensure responsiveness
window.addEventListener("resize", function () {
  document.dispatchEvent(new Event("scroll"));
});


document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".h2-section, .h3-section, .h4-section, .h5-section, .h6-section, .mainlinks");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in"); // Add fade-in class
      } else {
        entry.target.classList.remove("fade-in"); // Remove on scroll-out (optional)
      }
    });
  }, { threshold: 0.1 });

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
document.addEventListener("DOMContentLoaded", function () {
  const highlightWord = document.querySelector(".highlight");
  const navLinks = document.querySelectorAll("nav ul li a");
  const image = document.getElementById("hover-image");

  highlightWord.addEventListener("mouseenter", function () {
    // Change nav links color
    navLinks.forEach(link => link.classList.add("hover-effect"));

    // Change image
    image.src = "images/indexr.jpg"; // Replace with the new image path
  });

  highlightWord.addEventListener("mouseleave", function () {
    // Revert nav links color
    navLinks.forEach(link => link.classList.remove("hover-effect"));

    // Revert image
    image.src = "images/index.jpg"; // Original image path
  });
});
