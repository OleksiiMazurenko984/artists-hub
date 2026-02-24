import{S as x,N as B,P as T,a as y}from"./assets/vendor-fJp_pnmi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function P(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),s=document.querySelector("[data-menu]");if(!t||!e||!s)return;const r=()=>{const n=s.classList.toggle("is-open");document.body.style.overflow=n?"hidden":""};t.addEventListener("click",r),e.addEventListener("click",r),s.addEventListener("click",n=>{n.target.closest(".mobile-menu-link")&&r()})}const j=new x(".swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",dynamicBullets:!0,dynamicMainBullets:1},modules:[B,T]});function C(t){const e=Math.round(Number(t.rating)||0),s=t.author??t.name??"Anonymous",r=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${N(e)}
      </div>
      <blockquote class="feedback-text">
        ${r}
      </blockquote>
      <h3 class="feedback-author">
        ${s}
      </h3>
    </li>
  `}function N(t){const e=Math.round(Number(t)||0),s=5;let r="";for(let n=1;n<=s;n++)r+=`
      <span class="star ${n<=e?"active":""}"></span>
    `;return r}function H(t){const e=document.querySelector(".swiper-wrapper"),s=t.map(C).join("");return e.insertAdjacentHTML("beforeend",s)}y.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function I(t="",e={},s="get"){try{return(await y({url:t,method:s,...e})).data}catch(r){throw R(r),r}}function R(t){var s;const e=(s=t==null?void 0:t.response)==null?void 0:s.status;if(!t.response){console.error("Network error");return}e>=500?console.error("Server error"):console.error(e===404?"Resource not found":e===400?"Bad request":"Request failed")}const l={get:(t,e={})=>I(t,e,"get")};function O(){return l.get("/feedbacks",{params:{limit:10,page:1}})}async function _(){try{const{data:t}=await O();H(t),j.update()}catch(t){console.error(t)}}_();function F({page:t=1,limit:e=8}={}){return l.get("/artists",{params:{page:t,limit:e}})}function G(t){return l.get(`/artists/${t}`)}function D(t){return l.get(`/artists/${t}/albums`)}const f="/artists-hub/assets/icons-DqZdJnfG.svg",b=document.querySelector(".artists-list"),i=document.querySelector(".artists-load-more"),v=document.querySelector(".artists-loader");let u=1;const m=8,K=10;U();async function U(){try{await k()}catch(t){console.error("Помилка завантаження артистів:",t)}}async function k(){try{Y(),Z();const t=await F({page:u,limit:m}),e=(t==null?void 0:t.artists)||[];z(e),e.length<m||u>=K?X():d()}catch(t){console.error("Помилка:",t),d()}finally{Q()}}function z(t){const e=t.map(J).join("");b.insertAdjacentHTML("beforeend",e)}function J(t){var n;const e=((n=t.genres)==null?void 0:n.slice(0,4).map(o=>`<li class="artist-tag">${o}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,s=t.strBiographyEN||"A talented artist.",r=s.length>150?s.substring(0,150)+"...":s;return`
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
          <p class="artist-description">${r}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${t._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${f}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}b.addEventListener("click",t=>{const e=t.target.closest(".artist-learn-more");if(e){const s=e.dataset.artistId;console.log("Learn More clicked, Artist ID:",s)}});i&&i.addEventListener("click",V);async function V(){const t=document.querySelectorAll(".artist-card").length;u+=1;try{await k()}catch(e){console.error("Помилка при Load More:",e),d();return}setTimeout(()=>{const s=document.querySelectorAll(".artist-card")[t];s&&s.scrollIntoView({behavior:"smooth",block:"start"})},100)}function d(){i.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${f}#icon-down-arrow-alt"></use>
    </svg>
  `,i.disabled=!1,i.style.cursor="pointer",i.style.display="flex"}function X(){i.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,i.disabled=!0,i.style.cursor="not-allowed"}function Y(){i.disabled=!0,i.style.cursor="not-allowed"}function Z(){v.style.display="block"}function Q(){v.style.display="none"}function W(t){const e=document.querySelector(".js-artist-bio");if(!e)return;const s=t.map(({strArtist:r,strArtistThumb:n,intFormedYear:o,strGender:a,intMembers:M,strCountry:$,strBiographyEN:S,genres:A=[]})=>{const E=A.map(q=>`<li class="tags">${q}</li>`).join("");return`
        <h2 class="sub-title">${r??"Unknown Artist"}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${n??""}" alt="" />
      <div class="artist-info-conainer">
         <ul class="artist-info-list">
          <li class="artist-info">
            <h3 class="bold-text">Years active</h3>
            <p class="text">${o??"—"}</p>
          </li>
          <li class="artist-info">
            <h3 class="bold-text">Sex</h3>
            <p class="text">${a??"—"}</p>
          </li>
          <li class="artist-info">
            <h3 class="bold-text">Members</h3>
            <p class="text">${M??"—"}</p>
          </li>
          <li class="artist-info">
            <h3 class="bold-text">Country</h3>
            <p class="text">${$??"—"}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${S??"—"}
          </p>
        </div>
        <ul class="tags-list">
        ${E}

        </ul> 
      </div>
      </div>
      `}).join("");e.innerHTML=s}function tt(t){const e=document.querySelector(".js-artist-albums");if(!e)return;if(!t||t.length===0){e.innerHTML="<p>No albums available for this artist.</p>";return}const s=t.map(({strAlbum:r,intYearReleased:n,tracks:o})=>`
        <li class="albums-container">
          <h2 class="album-name">${r} (${n})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${et(o)}
          </ul>
        </li>
      `).join("");e.innerHTML=s}function et(t){return t?t.map(({strTrack:e,intDuration:s,movie:r})=>{const n=Math.floor(s/6e4),o=Math.floor(s%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${e}</li>
            <li class="track-time track-info">${n}:${o}</li>
            <li class="track-link track-info">
              ${r&&r!=="null"?`<a href="${r}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${f}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const c=document.querySelector(".modal"),st=document.querySelector(".close-image"),rt=document.querySelector(".artists-list"),h=document.querySelector(".js-artist-bio"),g=document.querySelector(".js-artist-albums");rt.addEventListener("click",ot);st.addEventListener("click",p);function nt(){c.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",w),c.addEventListener("click",L)}function p(){c.style.display="none",document.body.classList.remove("modal-open"),h&&(h.innerHTML=""),g&&(g.innerHTML=""),window.removeEventListener("keydown",w),c.removeEventListener("click",L)}function w(t){t.code==="Escape"&&p()}function L(t){t.target===c&&p()}async function ot(t){const e=t.target.closest(".artist-learn-more");if(!e)return;const s=e.dataset.artistId;nt();//! Loader
try{const[r]=await Promise.all([G(s)]);W([r])}catch(r){console.error("Error:",r)}try{const[r]=await Promise.all([D(s)]);tt(r.albumsList)}catch(r){console.error("Error:",r)}}P();
//# sourceMappingURL=index.js.map
