import{a as d}from"./assets/vendor-BJ9gahTP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function p(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),s=document.querySelector("[data-menu]");if(!t||!e||!s)return;const o=()=>{const r=s.classList.toggle("is-open");document.body.style.overflow=r?"hidden":""};t.addEventListener("click",o),e.addEventListener("click",o),s.addEventListener("click",r=>{r.target.closest(".mobile-menu-link")&&o()})}d.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function h(t="",e={},s="get"){try{return(await d({url:t,method:s,...e})).data}catch(o){throw m(o),o}}function m(t){var s;const e=(s=t==null?void 0:t.response)==null?void 0:s.status;if(!t.response){console.error("Network error");return}e>=500?console.error("Server error"):console.error(e===404?"Resource not found":e===400?"Bad request":"Request failed")}const y={get:(t,e={})=>h(t,e,"get")};function v(){return y.get("/artists")}const u=document.querySelector(".artists-list"),i=document.querySelector(".artists-load-more");let l=[],c=1;const f=8;L();async function L(){try{await b()}catch(t){console.error("Помилка завантаження артистів:",t)}}async function b(){try{l=(await v()).artists||[],g(1)}catch(t){console.error("Помилка:",t)}}function g(t){const s=t*f,o=l.slice(0,s);w(o),s>=l.length?q():E()}function w(t){const e=t.map(M).join("");u.innerHTML=e}function M(t){var r;const e=((r=t.genres)==null?void 0:r.slice(0,4).map(n=>`<li class="artist-tag">${n}</li>`).join(""))||`
    <li class="artist-tag">Alternative</li>
    <li class="artist-tag">Pop</li>
    <li class="artist-tag">Rock</li>
    <li class="artist-tag">Indie</li>
  `,s=t.strBiographyEN||"A talented artist.",o=s.length>150?s.substring(0,150)+"...":s;return`
    <li class="artist-card">
      <img src="${t.strArtistThumb}" 
           alt="${t.strArtist}" 
           class="artist-image" 
           loading="lazy"
           onerror="this.src='./img/artists/placeholder.png'">
      <div class="artist-content">
        <ul class="artist-tags">
          ${e}
        </ul>
        <div class="artist-info">
          <h3 class="artist-name">${t.strArtist}</h3>
          <p class="artist-description">${o}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${t._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
          <use href="./assets/icons.svg#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}u.addEventListener("click",t=>{const e=t.target.closest(".artist-learn-more");if(e){const s=e.dataset.artistId;console.log("Learn More clicked, Artist ID:",s)}});i&&i.addEventListener("click",A);function A(){const t=c*f;c++,g(c),setTimeout(()=>{const s=document.querySelectorAll(".artist-card")[t];s&&s.scrollIntoView({behavior:"smooth",block:"start"})},100)}function E(){i.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
      <use href="./assets/icons.svg#icon-down-arrow-alt"></use>
    </svg>
  `,i.disabled=!1,i.style.cursor="pointer",i.style.opacity="1",i.style.display="flex"}function q(){i.innerHTML=`
    <span>We're sorry, but you've reached the end of search results.</span>
  `,i.disabled=!0,i.style.cursor="not-allowed",i.style.opacity="0.6"}p();
//# sourceMappingURL=index.js.map
