import { http } from './http';

export function fetchFeedbacks() {
  return http.get('/feedbacks', { params: { limit: 10, page: 1 } });
}
