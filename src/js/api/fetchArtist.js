import { http } from './http';

export function fetchArtists({ page = 1, limit = 8 } = {}) {
  return http.get('/artists', { params: { page, limit } });
}
export function fetchArtistById(id) {
  return http.get(`/artists/${id}`);
}
export function fetchArtistAlbums(id) {
  return http.get(`/artists/${id}/albums`);
}
