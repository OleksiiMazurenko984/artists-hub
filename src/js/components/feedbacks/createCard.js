export function createCard(feedback) {
  const rating = Math.round(Number(feedback.rating) || 0);
  const author = feedback.author ?? feedback.name ?? 'Anonymous';
  const descr = feedback.descr ?? '';

  return `
    <li class="swiper-slide">
      <div class="stars-static">
        ${renderStars(rating)}
      </div>
      <blockquote class="feedback-text">
        ${descr}
      </blockquote>
      <h3 class="feedback-author">
        ${author}
      </h3>
    </li>
  `;
}

function renderStars(rating) {
  const rounded = Math.round(Number(rating) || 0);
  const totalStars = 5;

  let starsMarkup = '';

  for (let i = 1; i <= totalStars; i++) {
    starsMarkup += `
      <span class="star ${i <= rounded ? 'active' : ''}"></span>
    `;
  }

  return starsMarkup;
}