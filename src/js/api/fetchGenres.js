import { http } from './http';

export async function fetchGenres() {
  return await http.get('/genres');
}
