import { fetchArtists } from './api/fetchArtist';

const artistsList = document.querySelector('.artists-list');
const loadMoreBtn = document.querySelector('.artists-load-more');

let allArtists = [];
let currentPage = 1;
const perPage = 8;

// Initialize
init();

async function init() {
  try {
    await loadArtists();
  } catch (error) {
    console.error('Failed to load artists:', error);
  }
}

async function loadArtists() {
  try {
    const response = await fetchArtists();
    allArtists = response.artists || [];
    
    // Show first 8 artists
    showArtistsPage(1);
  } catch (error) {
    console.error('Error loading artists:', error);
  }
}

function showArtistsPage(page) {
  const startIndex = 0;
  const endIndex = page * perPage;
  const artistsToShow = allArtists.slice(startIndex, endIndex);
  
  renderArtists(artistsToShow);
  
  // Check if need to show Load More button
  if (endIndex >= allArtists.length) {
    showEndMessage();
  } else {
    showLoadMoreButton();
  }
}

function renderArtists(artists) {
  const markup = artists.map(artist => createArtistCard(artist)).join('');
  artistsList.innerHTML = markup;
}

function createArtistCard(artist) {
  const genreTags = artist.genres?.slice(0, 4).map(genre => 
    `<li class="artist-tag">${genre}</li>`
  ).join('') || `
    <li class="artist-tag">Alternative</li>
    <li class="artist-tag">Pop</li>
    <li class="artist-tag">Rock</li>
    <li class="artist-tag">Indie</li>
  `;
  
  const bio = artist.strBiographyEN || 'A talented artist.';
  const shortBio = bio.length > 150 ? bio.substring(0, 150) + '...' : bio;
  
  return `
    <li class="artist-card">
      <a href="#" class="artist-link" data-artist-id="${artist._id}">
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
            <p class="artist-description">${shortBio}</p>
          </div>
        </div>
        <div class="artist-link-wrapper">
          <span>Learn More</span>
          <svg class="artist-icon" width="24" height="24">
            <use href="./assets/icons.svg#icon-caret-right"></use>
          </svg>
        </div>
      </a>
    </li>
  `;
}

// Load More functionality
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', handleLoadMore);
}

function handleLoadMore() {
  currentPage += 1;
  showArtistsPage(currentPage);
  
  // Smooth scroll
  setTimeout(() => {
    const card = document.querySelector('.artist-card');
    if (card) {
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth'
      });
    }
  }, 100);
}

function showLoadMoreButton() {
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
