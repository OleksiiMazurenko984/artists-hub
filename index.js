import{S as M,N as S,P as A,a as h}from"./assets/vendor-fJp_pnmi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function $(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),s=document.querySelector("[data-menu]");if(!t||!e||!s)return;const n=()=>{const r=s.classList.toggle("is-open");document.body.style.overflow=r?"hidden":""};t.addEventListener("click",n),e.addEventListener("click",n),s.addEventListener("click",r=>{r.target.closest(".mobile-menu-link")&&n()})}const E=new M(".swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",dynamicBullets:!0,dynamicMainBullets:1},modules:[S,A]});function q(t){const e=Math.round(Number(t.rating)||0),s=t.author??t.name??"Anonymous",n=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${T(e)}
      </div>
      <blockquote class="feedback-text">
        ${n}
      </blockquote>
      <h3 class="feedback-author">
        ${s}
      </h3>
    </li>
  `}function T(t){const e=Math.round(Number(t)||0),s=5;let n="";for(let r=1;r<=s;r++)n+=`
      <span class="star ${r<=e?"active":""}"></span>
    `;return n}function B(t){const e=document.querySelector(".swiper-wrapper"),s=t.map(q).join("");return e.insertAdjacentHTML("beforeend",s)}h.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function P(t="",e={},s="get"){try{return(await h({url:t,method:s,...e})).data}catch(n){throw N(n),n}}function N(t){var s;const e=(s=t==null?void 0:t.response)==null?void 0:s.status;if(!t.response){console.error("Network error");return}e>=500?console.error("Server error"):console.error(e===404?"Resource not found":e===400?"Bad request":"Request failed")}const d={get:(t,e={})=>P(t,e,"get")};function j(){return d.get("/feedbacks",{params:{limit:10,page:1}})}async function x(){try{const{data:t}=await j();B(t),E.update()}catch(t){console.error(t)}}x();function C({page:t=1,limit:e=8}={}){return d.get("/artists",{params:{page:t,limit:e}})}function H(t){return d.get(`/artists/${t}/albums`)}const f="/artists-hub/assets/icons-DqZdJnfG.svg",b=document.querySelector(".artists-list"),i=document.querySelector(".artists-load-more"),L=document.querySelector(".artists-loader");let l=1;const m=8,I=10;O();async function O(){try{await k()}catch(t){console.error("Помилка завантаження артистів:",t)}}async function k(){try{D(),K();const t=await C({page:l,limit:m}),e=(t==null?void 0:t.artists)||[];R(e),e.length<m||l>=I?G():u()}catch(t){console.error("Помилка:",t),u()}finally{z()}}function R(t){const e=t.map(_).join("");b.insertAdjacentHTML("beforeend",e)}function _(t){var r;const e=((r=t.genres)==null?void 0:r.slice(0,4).map(o=>`<li class="artist-tag">${o}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,s=t.strBiographyEN||"A talented artist.",n=s.length>150?s.substring(0,150)+"...":s;return`
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
          <p class="artist-description">${n}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${t._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${f}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}b.addEventListener("click",t=>{const e=t.target.closest(".artist-learn-more");if(e){const s=e.dataset.artistId;console.log("Learn More clicked, Artist ID:",s)}});i&&i.addEventListener("click",F);async function F(){const t=document.querySelectorAll(".artist-card").length;l+=1;try{await k()}catch(e){console.error("Помилка при Load More:",e),u();return}setTimeout(()=>{const s=document.querySelectorAll(".artist-card")[t];s&&s.scrollIntoView({behavior:"smooth",block:"start"})},100)}function u(){i.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${f}#icon-down-arrow-alt"></use>
    </svg>
  `,i.disabled=!1,i.style.cursor="pointer",i.style.opacity="1",i.style.display="flex"}function G(){i.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,i.disabled=!0,i.style.cursor="not-allowed",i.style.opacity="0.6"}function D(){i.disabled=!0,i.style.cursor="not-allowed",i.style.opacity="0.6"}function K(){L.style.display="block"}function z(){L.style.display="none"}function J(t){const e=document.querySelector(".js-artist-albums");if(!e)return;if(!t||t.length===0){e.innerHTML="<p>No albums available for this artist.</p>";return}const s=t.map(({strAlbum:n,intYearReleased:r,tracks:o})=>`
        <li class="albums-container">
          <h2 class="album-name">${n} (${r})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${U(o)}
          </ul>
        </li>
      `).join("");e.innerHTML=s}function U(t){return t?t.map(({strTrack:e,intDuration:s,movie:n})=>{const r=Math.floor(s/6e4),o=Math.floor(s%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${e}</li>
            <li class="track-time track-info">${r}:${o}</li>
            <li class="track-link track-info">
              ${n&&n!=="null"?`<a href="${n}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${f}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const a=document.querySelector(".modal"),V=document.querySelector(".close-image"),X=document.querySelector(".artists-list"),y=document.querySelector(".js-artist-bio"),g=document.querySelector(".js-artist-albums");X.addEventListener("click",Q);V.addEventListener("click",p);function Z(){a.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",v),a.addEventListener("click",w)}function p(){a.style.display="none",document.body.classList.remove("modal-open"),y&&(y.innerHTML=""),g&&(g.innerHTML=""),window.removeEventListener("keydown",v),a.removeEventListener("click",w)}function v(t){t.code==="Escape"&&p()}function w(t){t.target===a&&p()}async function Q(t){const e=t.target.closest(".artist-learn-more");if(!e)return;const s=e.dataset.artistId;Z();//! Loader
try{const[n]=await Promise.all([H(s)]);J(n.albumsList)}catch(n){console.error("Error:",n)}}$();
//# sourceMappingURL=index.js.map
