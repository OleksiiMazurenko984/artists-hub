import { http } from './http';

export function fetchFeedbacks() {
  return http.get('/feedbacks', { params: { limit: 10, page: 1 } });
}

export function postFeedback({ name, rating, descr }) {
  return http.post('/feedbacks', { name, rating, descr });
}
