'use strict';
// VELTRIXS — lightweight interactions, vanilla JavaScript.
(() => {
  const header = document.getElementById('siteHeader');
  const progress = document.getElementById('scrollProgress');
  const topButton = document.getElementById('floatingTop');
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onScroll = () => {
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.width = Math.min(100, (window.scrollY / scrollable) * 100) + '%';
    header.classList.toggle('scrolled', window.scrollY > 28);
    topButton.classList.toggle('visible', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    mobileMenu.classList.remove('open');
    mobileMenu.inert = true;
    header.classList.remove('menu-open');
  };
  menuButton.addEventListener('click', () => {
    const next = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(next));
    menuButton.setAttribute('aria-label', next ? 'Close navigation menu' : 'Open navigation menu');
    mobileMenu.classList.toggle('open', next);
    mobileMenu.inert = !next;
    header.classList.toggle('menu-open', next);
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => { if (!header.contains(e.target)) closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 720) closeMenu(); });

  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' }));
  document.getElementById('year').textContent = String(new Date().getFullYear());

  // Entrance reveals gracefully show all content when Observer is unsupported.
  const reveals = document.querySelectorAll('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); } });
    }, { threshold: 0.11, rootMargin: '0px 0px -35px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add('in-view'));

  // One service open at a time, with button states kept in sync.
  const serviceRows = Array.from(document.querySelectorAll('.service-row'));
  serviceRows.forEach(row => {
    const toggle = row.querySelector('.service-toggle');
    toggle.addEventListener('click', () => {
      const open = row.classList.contains('is-active');
      serviceRows.forEach(item => {
        item.classList.remove('is-active');
        item.querySelector('.service-toggle').setAttribute('aria-expanded', 'false');
      });
      if (!open) { row.classList.add('is-active'); toggle.setAttribute('aria-expanded', 'true'); }
    });
  });

  // Cursor-aware ambient lighting: cosmetic only, not essential to content.
  const hero = document.querySelector('.hero');
  if (!reduceMotion && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let rafId = 0;
    hero.addEventListener('pointermove', e => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const glow = document.getElementById('heroGlow');
        glow.style.setProperty('--glow-x', ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + '%');
        glow.style.setProperty('--glow-y', ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + '%');
        rafId = 0;
      });
    }, { passive: true });
  }

  // Active link indication while scrolling.
  if ('IntersectionObserver' in window) {
    const navLinks = Array.from(document.querySelectorAll('.desktop-nav a'));
    const targets = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const navObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      navLinks.forEach(link => link.classList.toggle('is-current', link.getAttribute('href') === '#' + visible[0].target.id));
    }, { rootMargin: '-18% 0px -60% 0px', threshold: 0 });
    targets.forEach(target => navObserver.observe(target));
  }

  // The endpoint is intentionally NOT configured. Submit only when the user replaces it.
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', e => {
    const action = form.getAttribute('action') || '';
    if (!action || action.includes('YOUR_FORM_ACTION_LINK_HERE')) {
      e.preventDefault();
      status.textContent = 'The contact form is not connected yet. Please reach us by email or WhatsApp, or add your form endpoint in index.html.';
      status.classList.add('visible');
    }
  });
})();
