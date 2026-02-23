import { createListCards } from '../components/feedbacks/createListCards.js';
import { fetchFeedbacks } from '../api/feedbackService.js';

export async function renderFeedbacks() {
    try{
      const {feedbacks} = await fetchFeedbacks();
      createListCards(feedbacks);
    } catch(e) {
      console.error(e);
    }
}

renderFeedbacks();