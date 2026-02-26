export const toggleFilterMenu = () => {
  const filterBtn = document.querySelector('[data-filter-btn]');

  if (!filterBtn) return;

  filterBtn.addEventListener('click', () => {
    const filterWrapper = filterBtn.closest('[data-filter-wrapper]');

    if (filterWrapper) {
      filterWrapper.classList.toggle('is-open');

      const isOpen = filterWrapper.classList.contains('is-open');
      filterBtn.setAttribute('aria-expanded', isOpen);
    }
  });
};
