// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {

    // Toggle mobile menu (handled via inline functions in our HTML for simplicity)
  
    // Example: Sticky navbar background change on scroll
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("myNavbar");
      if (window.scrollY > 50) {
        navbar.style.background = "#00354a"; // Darker background on scroll
      } else {
        navbar.style.background = "#fff";
      }
    });
  
    // Contact form submission alert (if present)
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! We'll get back to you soon.");
        contactForm.reset();
      });
    }
  
    // Slide-in images effect (corrected getBoundingClientRect())
    const images = document.querySelectorAll('.slide-in');
    window.addEventListener('scroll', () => {
      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          image.classList.add('visible');
        }
      });
    });
  });
  
