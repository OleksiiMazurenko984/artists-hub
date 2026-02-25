import{S as _,N as F,a as S}from"./assets/vendor-BGP0wUfS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function z(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),n=document.querySelector("[data-menu]");if(!t||!e||!n)return;const a=()=>{const s=n.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""};t.addEventListener("click",a),e.addEventListener("click",a),n.addEventListener("click",s=>{s.target.closest(".mobile-menu-link")&&a()})}const l=new _(".feedback-swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[F]}),p=document.querySelector(".bullet-first"),h=document.querySelector(".bullet-middle"),y=document.querySelector(".bullet-last");function q(){const t=l.slides.length,e=l.activeIndex;p.classList.remove("is-active"),h.classList.remove("is-active"),y.classList.remove("is-active"),e===0?p.classList.add("is-active"):e===t-1?y.classList.add("is-active"):h.classList.add("is-active")}l.on("slideChange",q);q();p.addEventListener("click",()=>l.slideTo(0));y.addEventListener("click",()=>l.slideTo(l.slides.length-1));h.addEventListener("click",()=>l.slideTo(1));function G(t){const e=Math.round(Number(t.rating)||0),n=t.author??t.name??"Anonymous",a=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${K(e)}
      </div>
      <blockquote class="feedback-text">
        ${a}
      </blockquote>
      <h3 class="feedback-author">
        ${n}
      </h3>
    </li>
  `}function K(t){const e=Math.round(Number(t)||0),n=5;let a="";for(let s=1;s<=n;s++)a+=`
      <span class="star ${s<=e?"active":""}"></span>
    `;return a}function U(t){const e=document.querySelector(".swiper-wrapper"),n=t.map(G).join("");return e.insertAdjacentHTML("beforeend",n)}function V(t){var n;const e=(n=t==null?void 0:t.response)==null?void 0:n.status;return t!=null&&t.response?e>=500?"Server error. Please try again a little later.":e===404?"Requested data was not found.":e===400?"Invalid request. Please refresh the page and try again.":"Request failed. Please try again.":"Network error. Please check your internet connection and try again."}function X(t){var n;const e=V(t);(n=window.iziToast)!=null&&n.error&&window.iziToast.error({title:"Error",message:e,position:"topRight",timeout:4e3})}S.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function J(t="",e={},n="get"){try{return(await S({url:t,method:n,...e})).data}catch(a){throw Q(a),a}}function Q(t){var e;(e=t==null?void 0:t.response)==null||e.status,t.response||X(t)}const v={get:(t,e={})=>J(t,e,"get")};function W(){return v.get("/feedbacks",{params:{limit:10,page:1}})}const f=document.querySelector(".feedback-loader");async function Y(){Z();try{const{data:t}=await W();U(t),l.update()}catch{return}finally{D()}}function Z(){f&&(f.style.display="block")}function D(){f&&(f.style.display="none")}Y();function tt({page:t=1,limit:e=8}={}){return v.get("/artists",{params:{page:t,limit:e}})}function et(t){return v.get(`/artists/${t}/albums`)}const k="/artists-hub/assets/icons-BhdRcrdp.svg",st=document.querySelector(".artists-list"),o=document.querySelector(".artists-load-more"),E=document.querySelector(".artists-loader");let g=1;const w=8,nt=10;at();async function at(){await A()}async function A(){try{ct(),dt();const t=await tt({page:g,limit:w}),e=(t==null?void 0:t.artists)||[];it(e),e.length<w||g>=nt?lt():b()}catch{b()}finally{ut()}}function it(t){const e=t.map(ot).join("");st.insertAdjacentHTML("beforeend",e)}function ot(t){var s;const e=((s=t.genres)==null?void 0:s.slice(0,4).map(i=>`<li class="artist-tag">${i}</li>`).join(""))||`
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
           <use href="${k}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}o&&o.addEventListener("click",rt);async function rt(){const t=document.querySelectorAll(".artist-card").length;g+=1;try{await A()}catch{b();return}setTimeout(()=>{const n=document.querySelectorAll(".artist-card")[t];n&&n.scrollIntoView({behavior:"smooth",block:"start"})},100)}function b(){o.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${k}#icon-down-arrow-alt"></use>
    </svg>
  `,o.disabled=!1,o.style.cursor="pointer",o.style.display="flex"}function lt(){o.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,o.disabled=!0,o.style.cursor="not-allowed"}function ct(){o.disabled=!0,o.style.cursor="not-allowed"}function dt(){E.style.display="block"}function ut(){E.style.display="none"}function ft(t){const e=document.querySelector(".js-artist-bio");if(!e)return;const n=({intFormedYear:s,intDiedYear:i,strDisbanded:r})=>{const c=s&&s!=="0"?s:null,u=i&&i!=="0"?i:r&&r!=="null"&&r!=="0000-00-00"?r.slice(0,4):null;return c&&u?`${c} - ${u}`:c?`${c} - present`:"—"},a=t.map(({strArtist:s,strArtistThumb:i,intFormedYear:r,strGender:c,intDiedYear:u,strDisbanded:j,intMembers:B,strCountry:C,strBiographyEN:N,genres:H=[]})=>{const R=n({intFormedYear:r,intDiedYear:u,strDisbanded:j}),I=H.map(O=>`<li class="modal-tags">${O}</li>`).join("");return`
        <h2 class="sub-title">${s??"Unknown Artist"}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${i??""}" alt="" />
      <div class="modal-artist-info-container">
         <ul class="modal-artist-info-list">
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Years active</h3>
            <p class="modal-text">${R}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Sex</h3>
            <p class="modal-text">${c??"—"}</p>
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
      `}).join("");e.innerHTML=a}function mt(t){const e=document.querySelector(".js-artist-albums");if(!e)return;if(!t||t.length===0){e.innerHTML="<p>No albums available for this artist.</p>";return}const n=t.map(({strAlbum:a,intYearReleased:s,tracks:i})=>`
        <li class="albums-container">
          <h2 class="album-name">${a} (${s})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${pt(i)}
          </ul>
        </li>
      `).join("");e.innerHTML=n}function pt(t){return t?t.map(({strTrack:e,intDuration:n,movie:a})=>{const s=Math.floor(n/6e4),i=Math.floor(n%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${e}</li>
            <li class="track-time track-info">${s}:${i}</li>
            <li class="track-link track-info">
              ${a&&a!=="null"?`<a class="track-youtube-link" href="${a}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${k}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const d=document.querySelector(".modal"),ht=document.querySelector(".close-btn"),yt=document.querySelector(".artists-list"),M=document.querySelector(".js-artist-bio"),$=document.querySelector(".js-artist-albums"),m=document.querySelector(".modal-loader");yt.addEventListener("click",vt);ht.addEventListener("click",L);function gt(){d.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",T),d.addEventListener("click",P)}function L(){d.style.display="none",document.body.classList.remove("modal-open"),M&&(M.innerHTML=""),$&&($.innerHTML=""),x(),window.removeEventListener("keydown",T),d.removeEventListener("click",P)}function bt(){m&&(m.style.display="block")}function x(){m&&(m.style.display="none")}function T(t){t.code==="Escape"&&L()}function P(t){t.target===d&&L()}async function vt(t){const e=t.target.closest(".artist-learn-more");if(!e)return;const n=e.dataset.artistId;gt(),bt();try{const a=await et(n);ft([a]),mt(a.albumsList)}catch{return}finally{x()}}z();
//# sourceMappingURL=index.js.map
