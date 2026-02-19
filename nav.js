/* ============================================================
   Rhythmically Rooted Family — Navigation Script
   ============================================================ */

(function () {
  // ── Mobile hamburger toggle ─────────────────────────────────
  const btn  = document.getElementById('menuBtn');
  const menu = document.getElementById('navMenu');

  if (btn && menu) {
    btn.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.textContent = open ? '✕' : '☰';
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = '☰';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = '☰';
      }
    });
  }

  // ── Active nav link ─────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Footer year ─────────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
