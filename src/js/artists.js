import { fetchArtists } from './api/fetchArtist';
import iconsSprite from '../assets/icons.svg';
import placeholderImg from '../img/placeholder.jpg';

const artistsList = document.querySelector('.artists-list');
const filterList = document.querySelector('.filter-list');
const loadMoreBtn = document.querySelector('.artists-load-more');
const loader = document.querySelector('.artists-loader');
const searchByNameInput = document.querySelector('#search-input');
const searchByNameBtn = document.querySelector('#search-btn');
const resetBtn = document.querySelector('#reset-btn');
const genresList = document.querySelector('.js-filter-genres');

let currentSort = '';
let currentPage = 1;
const CARDS_PER_PAGE = 8;
let more = false;
let name = '';
let currentGenre = '';

artistsList?.addEventListener('click', event => {
  const emptyStateResetBtn = event.target.closest('[data-empty-reset-btn]');

  if (emptyStateResetBtn) {
    resetBtn.click();
  }
});

if (filterList) {
  filterList.addEventListener('change', event => {
    currentSort = event.target.value;
    currentPage = 1;
    artistsList.innerHTML = '';
    closeDropDown();
    loadArtists(more, name);
  });
}

resetBtn.addEventListener('click', async function (event) {
  more = false;
  name = '';
  currentSort = '';
  currentGenre = '';
  currentPage = 1;
  artistsList.innerHTML = '';

  searchByNameInput.value = '';

  await loadArtists(more, name);
});

searchByNameInput.addEventListener('keypress', async function (event) {
  more = false;
  if (event.key === 'Enter') {
    event.preventDefault();

    name = event.target.value;
    await loadArtists(more, name);
  }
});

searchByNameInput.addEventListener('change', event => {
  name = event.target.value;
});

searchByNameBtn.addEventListener('click', async function (event) {
  more = false;
  event.preventDefault();

  await loadArtists(more, name);
});

genresList.addEventListener('change', async function (event) {
  currentGenre = event.target.value;
  currentPage = 1;
  more = false;

  closeDropDown();

  await loadArtists(more, name);
});

init();

async function init() {
  more = true;
  await loadArtists(more);
}

async function loadArtists(more, name = '') {
  try {
    lockButton();
    showLoader();
    const data = await fetchArtists({
      page: currentPage,
      limit: CARDS_PER_PAGE,
      name: name,
      sortName: currentSort,
      genre: currentGenre,
    });
    const newArtists = data?.artists || [];

    if (!more && newArtists.length === 0) {
      renderEmptyState();
      hideLoadMoreBtn();
      return;
    }

    renderArtists(newArtists, more);

    if (newArtists.length < CARDS_PER_PAGE) {
      showEndMessage();
    } else {
      showLoadMoreBtn();
    }
  } catch {
    showLoadMoreBtn();
  } finally {
    hideLoader();
  }
}

function renderArtists(artists, more) {
  clearEmptyState();
  const markup = artists.map(createArtistCard).join('');
  more
    ? artistsList.insertAdjacentHTML('beforeend', markup)
    : (artistsList.innerHTML = markup);
}

function renderEmptyState() {
  artistsList.innerHTML = `
    <li class="artists-empty-state">
      <div class="artists-empty-state-card">
        <svg class="artists-empty-state-icon" width="40" height="40">
          <use href="${iconsSprite}#icon-error-circle"></use>
        </svg>
        <h4 class="artists-empty-state-title">Silence on the stage...</h4>
        <p class="artists-empty-state-text">Looks like no artists match your filters. </br>
        Try changing them or hit “Reset Filters” to bring back the beat.</p>
        <button type="button" class="artists-empty-state-btn" data-empty-reset-btn>
          Reset filters
        </button>
      </div>
    </li>
  `;
}

function clearEmptyState() {
  const emptyState = artistsList.querySelector('.artists-empty-state');
  if (emptyState) {
    emptyState.remove();
  }
}

function createArtistCard(artist) {
  const genreTags =
    artist.genres
      ?.slice(0, 4)
      .map(genre => `<li class="artist-tag">${genre}</li>`)
      .join('') ||
    `
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `;

  const bio = artist.strBiographyEN || 'A talented artist.';
  const description = bio.length > 150 ? bio.substring(0, 150) + '...' : bio;
  const imageSrc = artist.strArtistThumb?.trim() || placeholderImg;

  return `
    <li class="artist-card">
      <img src="${imageSrc}" 
           alt="${artist.strArtist}" 
           class="artist-image" 
           loading="lazy"
           onerror="this.onerror=null;this.src='${placeholderImg}'">
      <div class="artist-content">
        <ul class="artist-tags">
          ${genreTags}
        </ul>
        <div class="artist-info">
          <h4 class="artist-name">${artist.strArtist}</h4>
          <p class="artist-description">${description}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${artist._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${iconsSprite}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `;
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', handleLoadMore);
}

async function handleLoadMore() {
  more = true;
  const previousCount = document.querySelectorAll('.artist-card').length;

  currentPage += 1;

  try {
    await loadArtists(more, name);
  } catch {
    showLoadMoreBtn();
    return;
  }

  setTimeout(() => {
    const cards = document.querySelectorAll('.artist-card');
    const firstNewCard = cards[previousCount];

    if (firstNewCard) {
      firstNewCard.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, 100);
}

function showLoadMoreBtn() {
  loadMoreBtn.innerHTML = `
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${iconsSprite}#icon-down-arrow-alt"></use>
    </svg>
  `;
  loadMoreBtn.disabled = false;
  loadMoreBtn.style.cursor = 'pointer';
  loadMoreBtn.style.display = 'flex';
}

function showEndMessage() {
  loadMoreBtn.innerHTML = `
    <span>Sorry, you have reached the limit.</span>
  `;
  loadMoreBtn.disabled = true;
  loadMoreBtn.style.cursor = 'not-allowed';
}

function hideLoadMoreBtn() {
  loadMoreBtn.style.display = 'none';
}

function lockButton() {
  loadMoreBtn.disabled = true;
  loadMoreBtn.style.cursor = 'not-allowed';
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function closeDropDown() {
  const filterWrapper = genresList.closest('[data-filter-wrapper]');

  if (filterWrapper) {
    filterWrapper.classList.remove('is-open');

    const filterBtn = filterWrapper.querySelector('[data-filter-btn]');
    if (filterBtn) {
      filterBtn.setAttribute('aria-expanded', 'false');
    }
  }
}
