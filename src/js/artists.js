import { fetchArtists } from './api/fetchArtist';

const artistsList = document.querySelector('.artists-list');
const loadMoreBtn = document.querySelector('.artists-load-more');

let allArtists = [];
let currentPage = 1;
const CARDS_PER_PAGE = 8;

// Ініціалізація при завантаженні сторінки
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
    const data = await fetchArtists();
    allArtists = data.artists || [];
    
    showArtistsPage(1);
  } catch (error) {
    console.error('Помилка:', error);
  }
}

function showArtistsPage(page) {
  const start = 0;
  const end = page * CARDS_PER_PAGE;
  const artistsToShow = allArtists.slice(start, end);
  
  renderArtists(artistsToShow);
  
  // Перевіряємо чи є ще картки для завантаження
  if (end >= allArtists.length) {
    showEndMessage();
  } else {
    showLoadMoreBtn();
  }
}

function renderArtists(artists) {
  const markup = artists.map(createArtistCard).join('');
  artistsList.innerHTML = markup;
}

function createArtistCard(artist) {
  // Обрізаємо жанри до 4-х
  const genreTags = artist.genres?.slice(0, 4).map(genre => 
    `<li class="artist-tag">${genre}</li>`
  ).join('') || `
    <li class="artist-tag">Alternative</li>
    <li class="artist-tag">Pop</li>
    <li class="artist-tag">Rock</li>
    <li class="artist-tag">Indie</li>
  `;
  
  // Скорочуємо біографію якщо довга
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
          <use href="./assets/icons.svg#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `;
}

// Делегація подій для Learn More кнопки
artistsList.addEventListener('click', (e) => {
  const learnMoreBtn = e.target.closest('.artist-learn-more');
  
  if (learnMoreBtn) {
    const artistId = learnMoreBtn.dataset.artistId;
    console.log('Learn More clicked, Artist ID:', artistId);
    // Тут буде відкриватись модалка
  }
});

// Обробник кнопки Load More
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', handleLoadMore);
}

function handleLoadMore() {
  const previousCount = currentPage * CARDS_PER_PAGE;
  currentPage++;
  showArtistsPage(currentPage);
  
  // Плавний скрол до першої нової картки
  setTimeout(() => {
    const cards = document.querySelectorAll('.artist-card');
    const firstNewCard = cards[previousCount];
    
    if (firstNewCard) {
      firstNewCard.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 100);
}

function showLoadMoreBtn() {
  loadMoreBtn.innerHTML = `
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
      <use href="./assets/icons.svg#icon-down-arrow-alt"></use>
    </svg>
  `;
  loadMoreBtn.disabled = false;
  loadMoreBtn.style.cursor = 'pointer';
  loadMoreBtn.style.opacity = '1';
  loadMoreBtn.style.display = 'flex';
}

function showEndMessage() {
  loadMoreBtn.innerHTML = `
    <span>We're sorry, but you've reached the end of search results.</span>
  `;
  loadMoreBtn.disabled = true;
  loadMoreBtn.style.cursor = 'not-allowed';
  loadMoreBtn.style.opacity = '0.6';
}
