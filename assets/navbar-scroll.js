/* Furvora — Premium Navbar Scroll Effect */
(function () {
  const header = document.querySelector('.header-wrapper');
  if (!header) return;

  // Only go transparent on the homepage
  const isHomepage = document.body.classList.contains('template-index');

  if (isHomepage) {
    header.classList.add('header-wrapper--transparent');
  }

  function updateNav() {
    if (window.scrollY > 10) {
      header.classList.add('header-wrapper--scrolled');
      header.classList.remove('header-wrapper--transparent');
    } else {
      header.classList.remove('header-wrapper--scrolled');
      if (isHomepage) {
        header.classList.add('header-wrapper--transparent');
      }
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();