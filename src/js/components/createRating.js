export function createRating() {
  const stars = document.querySelectorAll('.stars-static');
  stars.forEach(container => {
    const rating = Number(container.dataset.rating);
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      const star = document.createElement('span');
      star.classList.add('star');

      if (i <= rating) {
        star.classList.add('active');
      }

      container.appendChild(star);
    }
  });
}
