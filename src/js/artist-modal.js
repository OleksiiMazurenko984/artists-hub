import { fetchArtistById, fetchArtistAlbums } from './api/fetchArtist.js';
import { renderBiography } from './render/renderModal.js';
import { renderAlbums } from './render/renderAlbums.js';

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-image');
const artistsList = document.querySelector('.artists-list');
const bioContainer = document.querySelector('.js-artist-bio');
const albumsContainer = document.querySelector('.js-artist-albums');
const modalLoader = document.querySelector('.modal-loader');

artistsList.addEventListener('click', onLearnMoreArtistClick);
closeModalBtn.addEventListener('click', closeModal);

function openModal() {
  modal.style.display = 'flex';
  document.body.classList.add('modal-open');

  window.addEventListener('keydown', onEscKeyPress);
  modal.addEventListener('click', onBackdropClick);
}

function closeModal() {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');

  if (bioContainer) bioContainer.innerHTML = '';
  if (albumsContainer) albumsContainer.innerHTML = '';
  hideModalLoader();

  window.removeEventListener('keydown', onEscKeyPress);
  modal.removeEventListener('click', onBackdropClick);
}

function showModalLoader() {
  if (modalLoader) {
    modalLoader.style.display = 'block';
  }
}

function hideModalLoader() {
  if (modalLoader) {
    modalLoader.style.display = 'none';
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
function onBackdropClick(event) {
  if (event.target === modal) {
    closeModal();
  }
}

async function onLearnMoreArtistClick(event) {
  const button = event.target.closest('.artist-learn-more');

  if (!button) return;

  const artistId = button.dataset.artistId;

  openModal();

  showModalLoader();

  try {
    const [bioResponse, albumsResponse] = await Promise.all([
      fetchArtistById(artistId),
      fetchArtistAlbums(artistId),
    ]);

    renderBiography([bioResponse]);
    renderAlbums(albumsResponse.albumsList);
  } catch {
    return;
  } finally {
    hideModalLoader();
  }
}
