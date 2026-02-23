import { createCard } from './createCard.js';

export function createListCards(feedbacks) {
  const el = document.querySelector('.swiper-wrapper');
  const markup = feedbacks.map(createCard).join('');
  return el.insertAdjacentHTML('beforeend', markup);
}