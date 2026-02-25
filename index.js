import{S as N,N as H,P as R,a as w}from"./assets/vendor-fJp_pnmi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function O(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),n=document.querySelector("[data-menu]");if(!t||!e||!n)return;const a=()=>{const s=n.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""};t.addEventListener("click",a),e.addEventListener("click",a),n.addEventListener("click",s=>{s.target.closest(".mobile-menu-link")&&a()})}const I=new N(".swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",dynamicBullets:!0,dynamicMainBullets:1},modules:[H,R]});function _(t){const e=Math.round(Number(t.rating)||0),n=t.author??t.name??"Anonymous",a=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${z(e)}
      </div>
      <blockquote class="feedback-text">
        ${a}
      </blockquote>
      <h3 class="feedback-author">
        ${n}
      </h3>
    </li>
  `}function z(t){const e=Math.round(Number(t)||0),n=5;let a="";for(let s=1;s<=n;s++)a+=`
      <span class="star ${s<=e?"active":""}"></span>
    `;return a}function F(t){const e=document.querySelector(".swiper-wrapper"),n=t.map(_).join("");return e.insertAdjacentHTML("beforeend",n)}function G(t){var n;const e=(n=t==null?void 0:t.response)==null?void 0:n.status;return t!=null&&t.response?e>=500?"Server error. Please try again a little later.":e===404?"Requested data was not found.":e===400?"Invalid request. Please refresh the page and try again.":"Request failed. Please try again.":"Network error. Please check your internet connection and try again."}function K(t){var n;const e=G(t);(n=window.iziToast)!=null&&n.error&&window.iziToast.error({title:"Error",message:e,position:"topRight",timeout:4e3})}w.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function U(t="",e={},n="get"){try{return(await w({url:t,method:n,...e})).data}catch(a){throw V(a),a}}function V(t){var e;(e=t==null?void 0:t.response)==null||e.status,t.response||K(t)}const y={get:(t,e={})=>U(t,e,"get")};function X(){return y.get("/feedbacks",{params:{limit:10,page:1}})}const d=document.querySelector(".feedback-loader");async function J(){Q();try{const{data:t}=await X();F(t),I.update()}catch{return}finally{W()}}function Q(){d&&(d.style.display="block")}function W(){d&&(d.style.display="none")}J();function Y({page:t=1,limit:e=8}={}){return y.get("/artists",{params:{page:t,limit:e}})}function Z(t){return y.get(`/artists/${t}/albums`)}const h="/artists-hub/assets/icons-BhdRcrdp.svg",D=document.querySelector(".artists-list"),i=document.querySelector(".artists-load-more"),L=document.querySelector(".artists-loader");let p=1;const b=8,tt=10;et();async function et(){await M()}async function M(){try{it(),rt();const t=await Y({page:p,limit:b}),e=(t==null?void 0:t.artists)||[];st(e),e.length<b||p>=tt?ot():m()}catch{m()}finally{lt()}}function st(t){const e=t.map(nt).join("");D.insertAdjacentHTML("beforeend",e)}function nt(t){var s;const e=((s=t.genres)==null?void 0:s.slice(0,4).map(o=>`<li class="artist-tag">${o}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,n=t.strBiographyEN||"A talented artist.",a=n.length>150?n.substring(0,150)+"...":n;return`
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
          <p class="artist-description">${a}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${t._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${h}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}i&&i.addEventListener("click",at);async function at(){const t=document.querySelectorAll(".artist-card").length;p+=1;try{await M()}catch{m();return}setTimeout(()=>{const n=document.querySelectorAll(".artist-card")[t];n&&n.scrollIntoView({behavior:"smooth",block:"start"})},100)}function m(){i.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${h}#icon-down-arrow-alt"></use>
    </svg>
  `,i.disabled=!1,i.style.cursor="pointer",i.style.display="flex"}function ot(){i.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,i.disabled=!0,i.style.cursor="not-allowed"}function it(){i.disabled=!0,i.style.cursor="not-allowed"}function rt(){L.style.display="block"}function lt(){L.style.display="none"}function ct(t){const e=document.querySelector(".js-artist-bio");if(!e)return;const n=({intFormedYear:s,intDiedYear:o,strDisbanded:r})=>{const l=s&&s!=="0"?s:null,u=o&&o!=="0"?o:r&&r!=="null"&&r!=="0000-00-00"?r.slice(0,4):null;return l&&u?`${l} - ${u}`:l?`${l} - present`:"—"},a=t.map(({strArtist:s,strArtistThumb:o,intFormedYear:r,strGender:l,intDiedYear:u,strDisbanded:q,intMembers:E,strCountry:x,strBiographyEN:T,genres:P=[]})=>{const B=n({intFormedYear:r,intDiedYear:u,strDisbanded:q}),j=P.map(C=>`<li class="modal-tags">${C}</li>`).join("");return`
        <h2 class="sub-title">${s??"Unknown Artist"}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${o??""}" alt="" />
      <div class="modal-artist-info-container">
         <ul class="modal-artist-info-list">
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Years active</h3>
            <p class="modal-text">${B}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Sex</h3>
            <p class="modal-text">${l??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Country</h3>
            <p class="modal-text">${x??"—"}</p>
          </li>
         <li class="modal-artist-info-item">
           <h3 class="modal-bold-text">Members</h3>
            <p class="modal-text">${E??"—"}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${T??"—"}
          </p>
        </div>
         <ul class="modal-tags-list">
        ${j}

        </ul> 
      </div>
      </div>
      `}).join("");e.innerHTML=a}function ut(t){const e=document.querySelector(".js-artist-albums");if(!e)return;if(!t||t.length===0){e.innerHTML="<p>No albums available for this artist.</p>";return}const n=t.map(({strAlbum:a,intYearReleased:s,tracks:o})=>`
        <li class="albums-container">
          <h2 class="album-name">${a} (${s})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${dt(o)}
          </ul>
        </li>
      `).join("");e.innerHTML=n}function dt(t){return t?t.map(({strTrack:e,intDuration:n,movie:a})=>{const s=Math.floor(n/6e4),o=Math.floor(n%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${e}</li>
            <li class="track-time track-info">${s}:${o}</li>
            <li class="track-link track-info">
              ${a&&a!=="null"?`<a class="track-youtube-link" href="${a}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${h}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const c=document.querySelector(".modal"),ft=document.querySelector(".close-btn"),pt=document.querySelector(".artists-list"),k=document.querySelector(".js-artist-bio"),v=document.querySelector(".js-artist-albums"),f=document.querySelector(".modal-loader");pt.addEventListener("click",ht);ft.addEventListener("click",g);function mt(){c.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",S),c.addEventListener("click",A)}function g(){c.style.display="none",document.body.classList.remove("modal-open"),k&&(k.innerHTML=""),v&&(v.innerHTML=""),$(),window.removeEventListener("keydown",S),c.removeEventListener("click",A)}function yt(){f&&(f.style.display="block")}function $(){f&&(f.style.display="none")}function S(t){t.code==="Escape"&&g()}function A(t){t.target===c&&g()}async function ht(t){const e=t.target.closest(".artist-learn-more");if(!e)return;const n=e.dataset.artistId;mt(),yt();try{const a=await Z(n);ct([a]),ut(a.albumsList)}catch{return}finally{$()}}O();
//# sourceMappingURL=index.js.map
