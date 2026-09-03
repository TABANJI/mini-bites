document.documentElement.classList.add('js');

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main section[id]');

const updateActiveNavigation = () => {
  let currentSection = 'home';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) currentSection = section.id;
  });

  navLinks.forEach((link) => {
    const target = link.getAttribute('href').slice(1);
    link.classList.toggle('active', target === currentSection || (target === 'menu' && currentSection === 'best-sellers'));
  });
};

window.addEventListener('scroll', updateActiveNavigation, { passive: true });
updateActiveNavigation();

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    const originalText = button.firstChild.textContent;
    button.firstChild.textContent = 'Added ';
    button.classList.add('added');
    window.setTimeout(() => {
      button.firstChild.textContent = originalText;
      button.classList.remove('added');
    }, 1400);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
