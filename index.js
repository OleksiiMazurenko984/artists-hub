import{S as _,N as z,a as $}from"./assets/vendor-BGP0wUfS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();function K(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),s=document.querySelector("[data-menu]");if(!t||!e||!s)return;const a=()=>{const n=s.classList.toggle("is-open");document.body.style.overflow=n?"hidden":""};t.addEventListener("click",a),e.addEventListener("click",a),s.addEventListener("click",n=>{n.target.closest(".mobile-menu-link")&&a()})}const c=new _(".feedback-swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[z]}),p=document.querySelector(".bullet-first"),h=document.querySelector(".bullet-middle"),g=document.querySelector(".bullet-last");function S(){const t=c.slides.length,e=c.activeIndex;p.classList.remove("is-active"),h.classList.remove("is-active"),g.classList.remove("is-active"),e===0?p.classList.add("is-active"):e===t-1?g.classList.add("is-active"):h.classList.add("is-active")}c.on("slideChange",S);S();p.addEventListener("click",()=>c.slideTo(0));g.addEventListener("click",()=>c.slideTo(c.slides.length-1));h.addEventListener("click",()=>c.slideTo(1));function U(t){const e=Math.round(Number(t.rating)||0),s=t.author??t.name??"Anonymous",a=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${G(e)}
      </div>
      <blockquote class="feedback-text">
        ${a}
      </blockquote>
      <h3 class="feedback-author">
        ${s}
      </h3>
    </li>
  `}function G(t){const e=Math.round(Number(t)||0),s=5;let a="";for(let n=1;n<=s;n++)a+=`
      <span class="star ${n<=e?"active":""}"></span>
    `;return a}function V(t){const e=document.querySelector(".swiper-wrapper"),s=t.map(U).join("");return e.insertAdjacentHTML("beforeend",s)}function J(t){var s;const e=(s=t==null?void 0:t.response)==null?void 0:s.status;return t!=null&&t.response?e>=500?"Server error. Please try again a little later.":e===404?"Requested data was not found.":e===400?"Invalid request. Please refresh the page and try again.":"Request failed. Please try again.":"Network error. Please check your internet connection and try again."}function Q(t){var s;const e=J(t);(s=window.iziToast)!=null&&s.error&&window.iziToast.error({title:"Error",message:e,position:"topRight",timeout:4e3})}$.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function W(t="",e={},s="get"){try{return(await $({url:t,method:s,...e})).data}catch(a){throw X(a),a}}function X(t){var e;(e=t==null?void 0:t.response)==null||e.status,t.response||Q(t)}const b={get:(t,e={})=>W(t,e,"get")};function Y(){return b.get("/feedbacks",{params:{limit:10,page:1}})}const f=document.querySelector(".feedback-loader");async function Z(){D();try{const{data:t}=await Y();V(t),c.update()}catch{return}finally{tt()}}function D(){f&&(f.style.display="block")}function tt(){f&&(f.style.display="none")}Z();function et({page:t=1,limit:e=8}={}){return b.get("/artists",{params:{page:t,limit:e}})}function st(t){return b.get(`/artists/${t}/albums`)}const v="/artists-hub/assets/icons-BhdRcrdp.svg",nt=document.querySelector(".artists-list"),r=document.querySelector(".artists-load-more"),q=document.querySelector(".artists-loader");let E=1;const L=8;at();async function at(){await x()}async function x(){try{ct(),dt();const t=await et({page:E,limit:L}),e=(t==null?void 0:t.artists)||[];it(e),e.length<L?lt():y()}catch{y()}finally{ut()}}function it(t){const e=t.map(ot).join("");nt.insertAdjacentHTML("beforeend",e)}function ot(t){var i,o;const e=((i=t.genres)==null?void 0:i.slice(0,4).map(l=>`<li class="artist-tag">${l}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,s=t.strBiographyEN||"A talented artist.",a=s.length>150?s.substring(0,150)+"...":s;return`
    <li class="artist-card">
      <img src="${((o=t.strArtistThumb)==null?void 0:o.trim())||"./img/placeholder.jpg"}" 
           alt="${t.strArtist}" 
           class="artist-image" 
           loading="lazy"
           onerror="this.onerror=null;this.src='./img/placeholder.jpg'">
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
           <use href="${v}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}r&&r.addEventListener("click",rt);async function rt(){const t=document.querySelectorAll(".artist-card").length;E+=1;try{await x()}catch{y();return}setTimeout(()=>{const s=document.querySelectorAll(".artist-card")[t];s&&s.scrollIntoView({behavior:"smooth",block:"start"})},100)}function y(){r.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${v}#icon-down-arrow-alt"></use>
    </svg>
  `,r.disabled=!1,r.style.cursor="pointer",r.style.display="flex"}function lt(){r.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,r.disabled=!0,r.style.cursor="not-allowed"}function ct(){r.disabled=!0,r.style.cursor="not-allowed"}function dt(){q.style.display="block"}function ut(){q.style.display="none"}function ft(t){const e=document.querySelector(".js-artist-bio");if(!e)return;const s=({intFormedYear:n,intDiedYear:i,strDisbanded:o})=>{const l=n&&n!=="0"?n:null,u=i&&i!=="0"?i:o&&o!=="null"&&o!=="0000-00-00"?o.slice(0,4):null;return l&&u?`${l} - ${u}`:l?`${l} - present`:"—"},a=t.map(({strArtist:n,strArtistThumb:i,intFormedYear:o,strGender:l,intDiedYear:u,strDisbanded:P,intMembers:B,strCountry:C,strBiographyEN:N,genres:H=[]})=>{const R=s({intFormedYear:o,intDiedYear:u,strDisbanded:P}),I=H.map(F=>`<li class="modal-tags">${F}</li>`).join(""),O=(i==null?void 0:i.trim())||"./img/placeholder.jpg";return`
        <h2 class="sub-title">${n??"Unknown Artist"}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${O}" alt="${n??"Artist"}" onerror="this.onerror=null;this.src='./img/placeholder.jpg'" />
      <div class="modal-artist-info-container">
         <ul class="modal-artist-info-list">
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Years active</h3>
            <p class="modal-text">${R}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Sex</h3>
            <p class="modal-text">${l??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Country</h3>
            <p class="modal-text">${C??"—"}</p>
          </li>
         <li class="modal-artist-info-item">
           <h3 class="modal-bold-text">Members</h3>
            <p class="modal-text">${B??"—"}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${N??"—"}
          </p>
        </div>
         <ul class="modal-tags-list">
        ${I}

        </ul> 
      </div>
      </div>
      `}).join("");e.innerHTML=a}function mt(t){const e=document.querySelector(".js-artist-albums");if(!e)return;if(!t||t.length===0){e.innerHTML="<p>No albums available for this artist.</p>";return}const s=t.map(({strAlbum:a,intYearReleased:n,tracks:i})=>`
        <li class="albums-container">
          <h2 class="album-name">${a} (${n})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${pt(i)}
          </ul>
        </li>
      `).join("");e.innerHTML=s}function pt(t){return t?t.map(({strTrack:e,intDuration:s,movie:a})=>{const n=Math.floor(s/6e4),i=Math.floor(s%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${e}</li>
            <li class="track-time track-info">${n}:${i}</li>
            <li class="track-link track-info">
              ${a&&a!=="null"?`<a class="track-youtube-link" href="${a}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${v}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const d=document.querySelector(".modal"),ht=document.querySelector(".close-btn"),gt=document.querySelector(".artists-list"),w=document.querySelector(".js-artist-bio"),M=document.querySelector(".js-artist-albums"),m=document.querySelector(".modal-loader");gt.addEventListener("click",vt);ht.addEventListener("click",k);function yt(){d.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",j),d.addEventListener("click",T)}function k(){d.style.display="none",document.body.classList.remove("modal-open"),w&&(w.innerHTML=""),M&&(M.innerHTML=""),A(),window.removeEventListener("keydown",j),d.removeEventListener("click",T)}function bt(){m&&(m.style.display="block")}function A(){m&&(m.style.display="none")}function j(t){t.code==="Escape"&&k()}function T(t){t.target===d&&k()}async function vt(t){const e=t.target.closest(".artist-learn-more");if(!e)return;const s=e.dataset.artistId;yt(),bt();try{const a=await st(s);ft([a]),mt(a.albumsList)}catch{return}finally{A()}}K();
//# sourceMappingURL=index.js.map
