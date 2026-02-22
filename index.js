import{a as d}from"./assets/vendor-BJ9gahTP.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();function p(){const t=document.querySelector("[data-menu-open]"),s=document.querySelector("[data-menu-close]"),r=document.querySelector("[data-menu]");if(!t||!s||!r)return;const o=()=>{const e=r.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};t.addEventListener("click",o),s.addEventListener("click",o),r.addEventListener("click",e=>{e.target.closest(".mobile-menu-link")&&o()})}d.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function g(t="",s={},r="get"){try{return(await d({url:t,method:r,...s})).data}catch(o){throw h(o),o}}function h(t){var r;const s=(r=t==null?void 0:t.response)==null?void 0:r.status;if(!t.response){console.error("Network error");return}s>=500?console.error("Server error"):console.error(s===404?"Resource not found":s===400?"Bad request":"Request failed")}const m={get:(t,s={})=>g(t,s,"get")};function y(){return m.get("/artists")}const v=document.querySelector(".artists-list"),i=document.querySelector(".artists-load-more");let l=[],c=1;const u=8;w();async function w(){try{await L()}catch(t){console.error("Помилка завантаження артистів:",t)}}async function L(){try{l=(await y()).artists||[],f(1)}catch(t){console.error("Помилка:",t)}}function f(t){const r=t*u,o=l.slice(0,r);b(o),r>=l.length?E():q()}function b(t){const s=t.map(M).join("");v.innerHTML=s}function M(t){var e;const s=((e=t.genres)==null?void 0:e.slice(0,4).map(n=>`<li class="artist-tag">${n}</li>`).join(""))||`
    <li class="artist-tag">Alternative</li>
    <li class="artist-tag">Pop</li>
    <li class="artist-tag">Rock</li>
    <li class="artist-tag">Indie</li>
  `,r=t.strBiographyEN||"A talented artist.",o=r.length>150?r.substring(0,150)+"...":r;return`
    <li class="artist-card">
      <a href="#" class="artist-link" data-artist-id="${t._id}">
        <img src="${t.strArtistThumb}" 
             alt="${t.strArtist}" 
             class="artist-image" 
             loading="lazy"
             onerror="this.src='./img/artists/placeholder.png'">
        <div class="artist-content">
          <ul class="artist-tags">
            ${s}
          </ul>
          <div class="artist-info">
            <h3 class="artist-name">${t.strArtist}</h3>
            <p class="artist-description">${o}</p>
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
  `}i&&i.addEventListener("click",A);function A(){const t=c*u;c++,f(c),setTimeout(()=>{const r=document.querySelectorAll(".artist-card")[t];r&&r.scrollIntoView({behavior:"smooth",block:"start"})},100)}function q(){i.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
      <use href="./assets/icons.svg#icon-down-arrow-alt"></use>
    </svg>
  `,i.disabled=!1,i.style.cursor="pointer",i.style.opacity="1",i.style.display="flex"}function E(){i.innerHTML=`
    <span>We're sorry, but you've reached the end of search results.</span>
  `,i.disabled=!0,i.style.cursor="not-allowed",i.style.opacity="0.6"}p();
//# sourceMappingURL=index.js.map
