const stars = document.querySelectorAll('.star-modal');
let selectedRating = 0;
stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const value = star.dataset.value;
    highlightStars(value);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating);
  });

// Выбор рейтинга
  star.addEventListener('click', () => {
    selectedRating = star.dataset.value;
    highlightStars(selectedRating);
  });
});

// Функция подсветки
function highlightStars(limit) {
  stars.forEach(star => {
    star.classList.toggle('active', star.dataset.value <= limit);
  });
}