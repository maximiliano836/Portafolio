function checkVisibility() {
  const elements = document.querySelectorAll('.fade-in-on-scroll');
  const triggerBottom = window.innerHeight * 0.9;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

// Permite llamar a checkVisibility desde otros scripts
window.checkVisibility = checkVisibility;