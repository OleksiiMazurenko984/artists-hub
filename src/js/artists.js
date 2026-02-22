import { fetchArtists } from './api/fetchArtist';
import iconsSprite from '../assets/icons.svg';

const artistsList = document.querySelector('.artists-list');
const loadMoreBtn = document.querySelector('.artists-load-more');

let currentPage = 1;
const CARDS_PER_PAGE = 8;
const MAX_PAGES = 10;

init();

async function init() {
  try {
    await loadArtists();
  } catch (error) {
    console.error('Помилка завантаження артистів:', error);
  }
}

async function loadArtists() {
  try {
    lockButton();

    const data = await fetchArtists({
      page: currentPage,
      limit: CARDS_PER_PAGE,
    });
    const newArtists = data?.artists || [];

    renderArtists(newArtists);

    if (newArtists.length < CARDS_PER_PAGE || currentPage >= MAX_PAGES) {
      showEndMessage();
    } else {
      showLoadMoreBtn();
    }
  } catch (error) {
    console.error('Помилка:', error);
    showLoadMoreBtn();
  }
}

function renderArtists(artists) {
  const markup = artists.map(createArtistCard).join('');
  artistsList.insertAdjacentHTML('beforeend', markup);
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

  return `
    <li class="artist-card">
      <img src="${artist.strArtistThumb}" 
           alt="${artist.strArtist}" 
           class="artist-image" 
           loading="lazy"
           onerror="this.src='./img/artists/placeholder.png'">
      <div class="artist-content">
        <ul class="artist-tags">
          ${genreTags}
        </ul>
        <div class="artist-info">
          <h3 class="artist-name">${artist.strArtist}</h3>
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

artistsList.addEventListener('click', e => {
  const learnMoreBtn = e.target.closest('.artist-learn-more');

  if (learnMoreBtn) {
    const artistId = learnMoreBtn.dataset.artistId;
    console.log('Learn More clicked, Artist ID:', artistId);
  }
});

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', handleLoadMore);
}

async function handleLoadMore() {
  const previousCount = document.querySelectorAll('.artist-card').length;

  currentPage += 1;

  try {
    await loadArtists();
  } catch (error) {
    console.error('Помилка при Load More:', error);
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
  loadMoreBtn.style.opacity = '1';
  loadMoreBtn.style.display = 'flex';
}

function showEndMessage() {
  loadMoreBtn.innerHTML = `
    <span>Sorry, you have reached the limit.</span>
  `;
  loadMoreBtn.disabled = true;
  loadMoreBtn.style.cursor = 'not-allowed';
  loadMoreBtn.style.opacity = '0.6';
}

function lockButton() {
  loadMoreBtn.disabled = true;
  loadMoreBtn.style.cursor = 'not-allowed';
  loadMoreBtn.style.opacity = '0.6';
}
