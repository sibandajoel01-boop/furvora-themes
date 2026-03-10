/* Furvora — Premium Navbar Scroll Effect
   Add this to assets/navbar-scroll.js
   Then add {{ 'navbar-scroll.js' | asset_url | script_tag }} to layout/theme.liquid before </body>
*/
(function () {
  const header = document.querySelector('.header-wrapper');
  if (!header) return;

  function updateNav() {
    if (window.scrollY > 10) {
      header.classList.add('header-wrapper--scrolled');
    } else {
      header.classList.remove('header-wrapper--scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // run on load in case page is already scrolled
})();
