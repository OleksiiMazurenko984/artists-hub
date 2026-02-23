import { swiper } from'../components/slider.js'
import { createListCards } from '../components/feedbacks/createListCards.js';
import { fetchFeedbacks } from '../api/feedbackService.js';

export async function renderFeedbacks() {
    try{
      const {data} = await fetchFeedbacks();
      createListCards(data);
      swiper.update();
    } catch(e) {
      console.error(e);
    }
}

renderFeedbacks();