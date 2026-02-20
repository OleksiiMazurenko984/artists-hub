export function initMobileMenu() {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('[data-menu]');

  if (!openMenuBtn || !closeMenuBtn || !mobileMenu) return;

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.toggle('is-open');
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  mobileMenu.addEventListener('click', event => {
    if (event.target.closest('.mobile-menu-link')) {
      toggleMenu();
    }
  });
}
