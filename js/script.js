const nav = document.querySelector('.navbar');
const toggle = document.querySelector('.nav-toggle');

const MOBILE_BREAKPOINT = 935;

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');


  if (!nav.classList.contains('open')) {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  }
});

const dropdownLinks = document.querySelectorAll('.dropdown > a');

dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Only on mobile widths AND only if menu is open
    if (window.innerWidth > MOBILE_BREAKPOINT) return;
    if (!nav.classList.contains('open')) return;

    e.preventDefault();

    const clickedDropdown = link.parentElement;
    const wasOpen = clickedDropdown.classList.contains('open');

    // Close all first
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));

    // Open only if it wasn't already open
    if (!wasOpen) clickedDropdown.classList.add('open');
  });
});

// Mobile: click outside closes any open dropdowns
document.addEventListener('click', (e) => {
  if (window.innerWidth > MOBILE_BREAKPOINT) return;
  if (e.target.closest('.navbar')) return;

  document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('navbar-scrolled')}
  else {
    nav.classList.remove('navbar-scrolled');
  }
});


