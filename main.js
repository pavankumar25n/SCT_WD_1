/* ═══════════════════════════════════════════════════════════
   LUMINOS LANDING PAGE — main.js
   ═══════════════════════════════════════════════════════════ */

'use strict';

// ── Nav: scroll colour change ─────────────────────────────
const navbar = document.getElementById('navbar');
const SCROLL_THRESHOLD = 40;

function updateNavOnScroll() {
  if (window.scrollY > SCROLL_THRESHOLD) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavOnScroll, { passive: true });
updateNavOnScroll(); // run once on load

// ── Nav: active link on scroll (IntersectionObserver) ────
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.nav-link[data-section]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(sec => sectionObserver.observe(sec));

// ── Mobile menu toggle ────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile menu on link click
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

// Close mobile menu on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.focus();
    document.body.style.overflow = '';
  }
});

// ── Scroll-in fade animations ─────────────────────────────
const fadeEls = document.querySelectorAll(
  '.work-card, .service-item, .stat-card, .testimonial, .section-header, .hero-content, .about-text, .cta-content'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => fadeObserver.observe(el));

// ── Staggered delays for grid children ───────────────────
function staggerChildren(selector, delayStep = 80) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.transitionDelay = `${i * delayStep}ms`;
  });
}
staggerChildren('.work-card');
staggerChildren('.service-item');
staggerChildren('.stat-card');
staggerChildren('.testimonial');

// ── Contact form ──────────────────────────────────────────
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate async send
    setTimeout(() => {
      btn.textContent = '✓ Message sent!';
      btn.style.background = '#22c55e';
      btn.style.boxShadow = '0 0 24px rgba(34,197,94,0.35)';

      setTimeout(() => {
        form.reset();
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.boxShadow = '';
      }, 2800);
    }, 1200);
  });
}

// ── Logo mark spin on hover (programmatic fallback) ──────
// (handled via CSS hover, JS only added as backup for touch devices)

// ── Smooth hash nav click ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
