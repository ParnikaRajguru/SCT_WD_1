// script.js
// Scroll header effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Toggle theme
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btn = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.textContent = "Continue Reading";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  }
}
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
const heartContainer = document.querySelector('.floating-hearts-container');





function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add("visible");
    } else {
      reveals[i].classList.remove("visible");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);


