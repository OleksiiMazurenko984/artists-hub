const stars = document.querySelectorAll('.star-modal');
let selectedRating = 0;
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.dataset.value;
    highlightStars(selectedRating);
  });
});

function highlightStars(limit) {
  stars.forEach(star => {
    star.classList.toggle('active', star.dataset.value <= limit);
  });
}
