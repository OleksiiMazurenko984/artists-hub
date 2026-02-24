export function renderBiography(artistsBio) {
    const biographyEl = document.querySelector('.js-artist-bio')

  if (!biographyEl) return;
  


  const markup = artistsBio
    .map(
      ({
        strArtist,
        strArtistThumb,
        intFormedYear,
        strGender,
        intMembers,
        strCountry,
        strBiographyEN,
        genres = [] }) => {
        
        const tagsMarkup = genres.map(tag => `<li class="tags">${tag}</li>`).join('');
        
      return `
        <h2 class="sub-title">${strArtist ?? 'Unknown Artist'}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${strArtistThumb ?? ''}" alt="" />
      <div class="artist-info-conainer">
         <ul class="artist-info-list">
          <li class="artist-info">
            <h3 class="bold-text">Years active</h3>
            <p class="text">${intFormedYear ?? '—'}</p>
          </li>
          <li class="artist-info">
            <h3 class="bold-text">Sex</h3>
            <p class="text">${strGender ?? '—'}</p>
          </li>
          <li class="artist-info">
            <h3 class="bold-text">Members</h3>
            <p class="text">${intMembers ?? '—'}</p>
          </li>
          <li class="artist-info">
            <h3 class="bold-text">Country</h3>
            <p class="text">${strCountry ?? '—'}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${strBiographyEN ?? '—'}
          </p>
        </div>
        <ul class="tags-list">
        ${tagsMarkup}

        </ul> 
      </div>
      </div>
      `;
    })
    .join('');

  biographyEl.innerHTML = markup;
}