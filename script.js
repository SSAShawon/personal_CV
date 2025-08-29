// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animate sections on scroll
const sections = document.querySelectorAll('.section');

function checkScroll() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      section.classList.add('visible');
    }
  });
}

// Trigger animation on page load and scroll
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);
