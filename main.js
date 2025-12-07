// main.js

// Smooth scroll for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    const targetId = anchor.getAttribute('href').slice(1);
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Close mobile nav after clicking on small screens
    const nav = document.querySelector('.site-nav');
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Join form handler (demo only)
const joinForm = document.getElementById('join-form');
const formMessage = document.getElementById('form-message');

if (joinForm && formMessage) {
  joinForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = joinForm.elements['name']?.value.trim();
    const clazz = joinForm.elements['class']?.value.trim();
    const interest = joinForm.elements['interest']?.value || '';

    if (!name || !clazz) {
      formMessage.textContent = 'Add at least your name and class to react with Enthalion.';
      formMessage.classList.remove('success');
      formMessage.classList.add('error');
      return;
    }

    formMessage.textContent =
      'Interest recorded (demo only). Final selection will be done by the faculty in-charge and core team.';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');

    // Optional: clear form fields
    joinForm.reset();
  });
}
