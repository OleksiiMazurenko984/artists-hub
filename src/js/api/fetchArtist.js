import { http } from './http';

export function fetchArtists() {
  return http.get('/artists');
}
export function fetchArtistById(id) {
  return http.get(`/artists/${id}`);
}
export function fetchArtistAlbums(id) {
  return http.get(`/artists/${id}/albums`);
}
