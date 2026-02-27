import { http } from './http';

export function fetchArtists({
  page = 1,
  limit = 8,
  name,
  sortName,
  genre,
} = {}) {
  const params = { page, limit };

  if (sortName) {
    params.sortName = sortName;
  }

  if (name) {
    params.name = name;
  }

  if (genre) {
    params.genre = genre;
  }

  return http.get('/artists', { params });
}
export function fetchArtistById(id) {
  return http.get(`/artists/${id}`);
}
export function fetchArtistAlbums(id) {
  return http.get(`/artists/${id}/albums`);
}
