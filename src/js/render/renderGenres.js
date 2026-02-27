import { fetchGenres } from '../api/fetchGenres';

export async function renderGenres() {
  const genresList = document.querySelector('.js-filter-genres');
  const genres = await fetchGenres();

  const genresMarkup = genres
    .map(item => {
      return `
      <li class="filter-item">
        <label class="filter-option">
          <input 
            type="radio" 
            name="genre" 
            value="${item.genre}" 
            class="filter-input-real"
          />
          <span class="filter-custom-text">${item.genre}</span>
        </label>
      </li>
    `;
    })
    .join('');

  genresList.insertAdjacentHTML('beforeend', genresMarkup);
}
