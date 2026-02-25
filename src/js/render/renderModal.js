export function renderBiography(artistsBio) {
  const biographyEl = document.querySelector('.js-artist-bio');

  if (!biographyEl) return;

  const getYearsActive = ({ intFormedYear, intDiedYear, strDisbanded }) => {
    const formedYear =
      intFormedYear && intFormedYear !== '0' ? intFormedYear : null;
    const endYear =
      intDiedYear && intDiedYear !== '0'
        ? intDiedYear
        : strDisbanded &&
            strDisbanded !== 'null' &&
            strDisbanded !== '0000-00-00'
          ? strDisbanded.slice(0, 4)
          : null;

    if (formedYear && endYear) return `${formedYear} - ${endYear}`;
    if (formedYear) return `${formedYear} - present`;

    return '—';
  };

  const markup = artistsBio
    .map(
      ({
        strArtist,
        strArtistThumb,
        intFormedYear,
        strGender,
        intDiedYear,
        strDisbanded,
        intMembers,
        strCountry,
        strBiographyEN,
        genres = [],
      }) => {
        const yearsActive = getYearsActive({
          intFormedYear,
          intDiedYear,
          strDisbanded,
        });

        const tagsMarkup = genres
          .map(tag => `<li class="modal-tags">${tag}</li>`)
          .join('');
        const imageSrc = strArtistThumb?.trim() || './img/placeholder.jpg';

        return `
        <h2 class="sub-title">${strArtist ?? 'Unknown Artist'}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${imageSrc}" alt="${strArtist ?? 'Artist'}" onerror="this.onerror=null;this.src='./img/placeholder.jpg'" />
      <div class="modal-artist-info-container">
         <ul class="modal-artist-info-list">
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Years active</h3>
            <p class="modal-text">${yearsActive}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Sex</h3>
            <p class="modal-text">${strGender ?? '—'}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Country</h3>
            <p class="modal-text">${strCountry ?? '—'}</p>
          </li>
         <li class="modal-artist-info-item">
           <h3 class="modal-bold-text">Members</h3>
            <p class="modal-text">${intMembers ?? '—'}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${strBiographyEN ?? '—'}
          </p>
        </div>
         <ul class="modal-tags-list">
        ${tagsMarkup}

        </ul> 
      </div>
      </div>
      `;
      }
    )
    .join('');

  biographyEl.innerHTML = markup;
}
