import{a as u}from"./assets/vendor-BJ9gahTP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();function h(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),r=document.querySelector("[data-menu]");if(!t||!e||!r)return;const i=()=>{const s=r.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""};t.addEventListener("click",i),e.addEventListener("click",i),r.addEventListener("click",s=>{s.target.closest(".mobile-menu-link")&&i()})}u.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function m(t="",e={},r="get"){try{return(await u({url:t,method:r,...e})).data}catch(i){throw L(i),i}}function L(t){var r;const e=(r=t==null?void 0:t.response)==null?void 0:r.status;if(!t.response){console.error("Network error");return}e>=500?console.error("Server error"):console.error(e===404?"Resource not found":e===400?"Bad request":"Request failed")}const b={get:(t,e={})=>m(t,e,"get")};function v({page:t=1,limit:e=8}={}){return b.get("/artists",{params:{page:t,limit:e}})}const f="/artists-hub/assets/icons-BT2y1KeF.svg",p=document.querySelector(".artists-list"),o=document.querySelector(".artists-load-more"),y=document.querySelector(".artists-loader");let c=1;const d=8,w=10;M();async function M(){try{await g()}catch(t){console.error("Помилка завантаження артистів:",t)}}async function g(){try{B(),P();const t=await v({page:c,limit:d}),e=(t==null?void 0:t.artists)||[];A(e),e.length<d||c>=w?E():l()}catch(t){console.error("Помилка:",t),l()}finally{$()}}function A(t){const e=t.map(S).join("");p.insertAdjacentHTML("beforeend",e)}function S(t){var s;const e=((s=t.genres)==null?void 0:s.slice(0,4).map(n=>`<li class="artist-tag">${n}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,r=t.strBiographyEN||"A talented artist.",i=r.length>150?r.substring(0,150)+"...":r;return`
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
          <p class="artist-description">${i}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${t._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${f}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}p.addEventListener("click",t=>{const e=t.target.closest(".artist-learn-more");if(e){const r=e.dataset.artistId;console.log("Learn More clicked, Artist ID:",r)}});o&&o.addEventListener("click",q);async function q(){const t=document.querySelectorAll(".artist-card").length;c+=1;try{await g()}catch(e){console.error("Помилка при Load More:",e),l();return}setTimeout(()=>{const r=document.querySelectorAll(".artist-card")[t];r&&r.scrollIntoView({behavior:"smooth",block:"start"})},100)}function l(){o.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${f}#icon-down-arrow-alt"></use>
    </svg>
  `,o.disabled=!1,o.style.cursor="pointer",o.style.opacity="1",o.style.display="flex"}function E(){o.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,o.disabled=!0,o.style.cursor="not-allowed",o.style.opacity="0.6"}function B(){o.disabled=!0,o.style.cursor="not-allowed",o.style.opacity="0.6"}function P(){y.style.display="block"}function $(){y.style.display="none"}h();
//# sourceMappingURL=index.js.map
