// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close the menu after tapping a link on mobile
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Fade sections in as they enter the viewport
const revealTargets = document.querySelectorAll('.section, .stats, .cta');
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealTargets.forEach((el) => observer.observe(el));
