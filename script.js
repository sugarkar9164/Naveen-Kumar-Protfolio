// Subtle reveal animation — lightweight and GitHub Pages friendly.
const items = document.querySelectorAll('.section, .role, .skill-grid>div, .project-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});
items.forEach(item => { item.classList.add('reveal'); observer.observe(item); });
