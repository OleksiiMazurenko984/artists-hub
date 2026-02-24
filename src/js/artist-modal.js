import { fetchArtistById, fetchArtistAlbums } from './api/fetchArtist.js';
import { renderBiography } from './render/renderModal.js';
import { renderAlbums } from './render/renderAlbums.js';

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-image');
const artistsList = document.querySelector('.artists-list');
const bioContainer = document.querySelector('.js-artist-bio');
const albumsContainer = document.querySelector('.js-artist-albums');

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

  window.removeEventListener('keydown', onEscKeyPress);
  modal.removeEventListener('click', onBackdropClick);
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

  //! Loader

   try {
    const [bioResponse] = await Promise.all([fetchArtistById(artistId)]);

     renderBiography([bioResponse]);
  } catch (error) {
    console.error('Error:', error);
  }

  try {
    const [albumsResponse] = await Promise.all([fetchArtistAlbums(artistId)]);

    renderAlbums(albumsResponse.albumsList);
  } catch (error) {
    console.error('Error:', error);
  }
}
