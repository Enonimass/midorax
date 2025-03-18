// Example JavaScript for simple interactions

// Add a simple function to handle contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for your message! We'll be in touch soon.");
      contactForm.reset();
    });
  }
});


// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Example: sticky nav background change on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.background = "#00354a"; // slightly different color when scrolled
    } else {
      navbar.style.background = "#0c1e2b";
    }
  });

  // Optional: simple contact form submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for reaching out! We'll get back to you soon.");
      contactForm.reset();
    });
  }
});
