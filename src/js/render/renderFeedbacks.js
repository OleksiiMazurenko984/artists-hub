import { swiper } from '../components/slider.js';
import { createListCards } from '../components/feedbacks/createListCards.js';
import { fetchFeedbacks } from '../api/feedbackService.js';

const feedbackLoader = document.querySelector('.feedback-loader');

export async function renderFeedbacks() {
  showFeedbackLoader();
  try {
    const { data } = await fetchFeedbacks();
    createListCards(data);
    swiper.update();
  } catch (e) {
    console.error(e);
  } finally {
    hideFeedbackLoader();
  }
}

function showFeedbackLoader() {
  if (feedbackLoader) {
    feedbackLoader.style.display = 'block';
  }
}

function hideFeedbackLoader() {
  if (feedbackLoader) {
    feedbackLoader.style.display = 'none';
  }
}

renderFeedbacks();
