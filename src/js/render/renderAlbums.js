export function renderAlbums(albums) {
  const container = document.querySelector('.js-artist-albums');

  if (!container) return;

  if (!albums || albums.length === 0) {
    container.innerHTML = '<p>No albums available for this artist.</p>';
    return;
  }

  const markup = albums
    .map(({ strAlbum, intYearReleased, tracks }) => {
      return `
        <li class="albums-container">
          <h2 class="album-name">${strAlbum} (${intYearReleased})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${renderTracks(tracks)}
          </ul>
        </li>
      `;
    })
    .join('');

  container.innerHTML = markup;
}

function renderTracks(tracks) {
  if (!tracks) return '';

  console.log('Track data sample:', tracks[0]);

  return tracks
    .map(({ strTrack, intDuration, movie }) => {
      const minutes = Math.floor(intDuration / 60000);
      const seconds = Math.floor((intDuration % 60000) / 1000)
        .toString()
        .padStart(2, '0');

      return `
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${strTrack}</li>
            <li class="track-time track-info">${minutes}:${seconds}</li>
            <li class="track-link track-info">
              ${
                movie && movie !== 'null'
                  ? `<a href="${movie}" target="_blank" rel="noopener noreferrer">
                     <svg class="youtube-svg" width="24" height="24">
                        <use href="./assets/icons.svg#icon-youtube"></use>
                     </svg>
                   </a>`
                  : ''
              }
            </li>
          </ul>
        </li>
      `;
    })
    .join('');
}
