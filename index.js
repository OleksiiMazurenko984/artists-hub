import{S as h,N as b,P as w,a as d}from"./assets/vendor-fJp_pnmi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();function v(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),r=document.querySelector("[data-menu]");if(!t||!e||!r)return;const o=()=>{const s=r.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""};t.addEventListener("click",o),e.addEventListener("click",o),r.addEventListener("click",s=>{s.target.closest(".mobile-menu-link")&&o()})}const L=new h(".swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",dynamicBullets:!0,dynamicMainBullets:1},modules:[b,w]});function M(t){const e=Math.round(Number(t.rating)||0),r=t.author??t.name??"Anonymous",o=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${A(e)}
      </div>
      <blockquote class="feedback-text">
        ${o}
      </blockquote>
      <h3 class="feedback-author">
        ${r}
      </h3>
    </li>
  `}function A(t){const e=Math.round(Number(t)||0),r=5;let o="";for(let s=1;s<=r;s++)o+=`
      <span class="star ${s<=e?"active":""}"></span>
    `;return o}function S(t){const e=document.querySelector(".swiper-wrapper"),r=t.map(M).join("");return e.insertAdjacentHTML("beforeend",r)}d.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function q(t="",e={},r="get"){try{return(await d({url:t,method:r,...e})).data}catch(o){throw k(o),o}}function k(t){var r;const e=(r=t==null?void 0:t.response)==null?void 0:r.status;if(!t.response){console.error("Network error");return}e>=500?console.error("Server error"):console.error(e===404?"Resource not found":e===400?"Bad request":"Request failed")}const p={get:(t,e={})=>q(t,e,"get")};function E(){return p.get("/feedbacks",{params:{limit:10,page:1}})}async function $(){try{const{data:t}=await E();S(t),L.update()}catch(t){console.error(t)}}$();function B({page:t=1,limit:e=8}={}){return p.get("/artists",{params:{page:t,limit:e}})}const f="/artists-hub/assets/icons-DqZdJnfG.svg",g=document.querySelector(".artists-list"),n=document.querySelector(".artists-load-more"),m=document.querySelector(".artists-loader");let c=1;const u=8,P=10;N();async function N(){try{await y()}catch(t){console.error("Помилка завантаження артистів:",t)}}async function y(){try{R(),j();const t=await B({page:c,limit:u}),e=(t==null?void 0:t.artists)||[];O(e),e.length<u||c>=P?I():l()}catch(t){console.error("Помилка:",t),l()}finally{x()}}function O(t){const e=t.map(T).join("");g.insertAdjacentHTML("beforeend",e)}function T(t){var s;const e=((s=t.genres)==null?void 0:s.slice(0,4).map(i=>`<li class="artist-tag">${i}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,r=t.strBiographyEN||"A talented artist.",o=r.length>150?r.substring(0,150)+"...":r;return`
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
           <use href="${f}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}g.addEventListener("click",t=>{const e=t.target.closest(".artist-learn-more");if(e){const r=e.dataset.artistId;console.log("Learn More clicked, Artist ID:",r)}});n&&n.addEventListener("click",C);async function C(){const t=document.querySelectorAll(".artist-card").length;c+=1;try{await y()}catch(e){console.error("Помилка при Load More:",e),l();return}setTimeout(()=>{const r=document.querySelectorAll(".artist-card")[t];r&&r.scrollIntoView({behavior:"smooth",block:"start"})},100)}function l(){n.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${f}#icon-down-arrow-alt"></use>
    </svg>
  `,n.disabled=!1,n.style.cursor="pointer",n.style.opacity="1",n.style.display="flex"}function I(){n.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,n.disabled=!0,n.style.cursor="not-allowed",n.style.opacity="0.6"}function R(){n.disabled=!0,n.style.cursor="not-allowed",n.style.opacity="0.6"}function j(){m.style.display="block"}function x(){m.style.display="none"}v();
//# sourceMappingURL=index.js.map
