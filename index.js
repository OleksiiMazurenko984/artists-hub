import{a as C,S as K,N as _}from"./assets/vendor-DuogCDzc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function A(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=A(n);fetch(n.href,a)}})();function tt(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),A=document.querySelector("[data-menu]");if(!t||!e||!A)return;const s=()=>{const n=A.classList.toggle("is-open");document.body.style.overflow=n?"hidden":""};t.addEventListener("click",s),e.addEventListener("click",s),A.addEventListener("click",n=>{n.target.closest(".mobile-menu-link")&&s()})}const et=()=>{const t=document.querySelector("[data-filter-btn]");t&&t.addEventListener("click",()=>{const e=t.closest("[data-filter-wrapper]");if(e){e.classList.toggle("is-open");const A=e.classList.contains("is-open");t.setAttribute("aria-expanded",A)}})};function At(t){var A;const e=(A=t==null?void 0:t.response)==null?void 0:A.status;return t!=null&&t.response?e>=500?"Server error. Please try again a little later.":e===404?"Requested data was not found.":e===400?"Invalid request. Please refresh the page and try again.":"Request failed. Please try again.":"Network error. Please check your internet connection and try again."}function st(t){var A;const e=At(t);(A=window.iziToast)!=null&&A.error&&window.iziToast.error({title:"Error",message:e,position:"topRight",timeout:4e3})}C.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function nt(t="",e={},A="get"){try{return(await C({url:t,method:A,...e})).data}catch(s){throw at(s),s}}function at(t){var e;(e=t==null?void 0:t.response)==null||e.status,t.response||st(t)}const b={get:(t,e={})=>nt(t,e,"get")};async function rt(){return await b.get("/genres")}async function it(){const t=document.querySelector(".js-filter-genres"),A=(await rt()).map(s=>`
      <li class="filter-item">
        <label class="filter-option">
          <input 
            type="radio" 
            name="genre" 
            value="${s.genre}" 
            class="filter-input-real"
          />
          <span class="filter-custom-text">${s.genre}</span>
        </label>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",A)}const u=new K(".feedback-swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[_]}),L=document.querySelector(".bullet-first"),E=document.querySelector(".bullet-middle"),w=document.querySelector(".bullet-last");function H(){const t=u.slides.length,e=u.activeIndex;L.classList.remove("is-active"),E.classList.remove("is-active"),w.classList.remove("is-active"),e===0?L.classList.add("is-active"):e===t-1?w.classList.add("is-active"):E.classList.add("is-active")}u.on("slideChange",H);H();L.addEventListener("click",()=>u.slideTo(0));w.addEventListener("click",()=>u.slideTo(u.slides.length-1));E.addEventListener("click",()=>u.slideTo(1));function ot(t){const e=Math.round(Number(t.rating)||0),A=t.author??t.name??"Anonymous",s=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${ct(e)}
      </div>
      <blockquote class="feedback-text">
        ${s}
      </blockquote>
      <h3 class="feedback-author">
        ${A}
      </h3>
    </li>
  `}function ct(t){const e=Math.round(Number(t)||0),A=5;let s="";for(let n=1;n<=A;n++)s+=`
      <span class="star ${n<=e?"active":""}"></span>
    `;return s}function lt(t){const e=document.querySelector(".swiper-wrapper"),A=t.map(ot).join("");return e.insertAdjacentHTML("beforeend",A)}function dt(){return b.get("/feedbacks",{params:{limit:10,page:1}})}const g=document.querySelector(".feedback-loader");async function ut(){ft();try{const{data:t}=await dt();lt(t),u.update()}catch{return}finally{pt()}}function ft(){g&&(g.style.display="block")}function pt(){g&&(g.style.display="none")}ut();function mt({page:t=1,limit:e=8,name:A,sortName:s,genre:n}={}){const a={page:t,limit:e};return s&&(a.sortName=s),A&&(a.name=A),n&&(a.genre=n),b.get("/artists",{params:a})}function yt(t){return b.get(`/artists/${t}/albums`)}const k="/artists-hub/assets/icons-DSJOWbPK.svg",h="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQGAwIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/usn8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A6JAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5+kc1Jgppgppgppgp6oWorgAAAAAAAAAAAAAAAAAAAAAAAARrMYzgHoedeRTPDHpzDTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjGc9jRQ+v0hedrCZvi/EPPTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjHjai6yoliolip44Rj0Z9BYAAAAAAAAAAAAAAAAAAAAAAAAAnURz7oBz7oBz7oBz7oBz9CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2Ho5RhAAAAAAAAAAAAAAAAAAAAAAAAAAAANx8LA//8QALRAAAgECAwYGAgMBAAAAAAAAAQIDAAQRFFIQEjFBUFETISIzNHEggTCQoWL/2gAIAQEAAT8AuroRelfNz/lPLJIcXck9aSWSM4o5FWN94/ofycf7Ujl5GY8z1yNzHIrjkf69pZUiGLGs8mhqzyaDWeTQazyaDWeTQazyaDWeTQazyaDWeTQ1RypKMVPU7tiZ2Hby/is2ImA5EHqd18iT8orWJVG8oY88au4FjKsvA8ttp76/R6ndfIk/B4pIwCy4A7IryPcAkxBFXM/jEADBRttPfX6PU7r5Em20g3j4jDyHCpEWRSrc6ljaNyp2GN1UMVIB4Hbae+v0ep3XyJNkEJlfDlzNABQABgBsnhEqf9DhVvaszYyKQo5d6dFdSpHkaliaJyp/R2Wnvr9Hqd18iSlUswUcTUMSxIFH7P5TwiVMOY4GiCpIPEVae+v0ep3XyJKVijBhxFZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStMxZix4k1ae+v0ep3cDFvEUY9xW63Y1ut2NbrdjW63Y1ut2NbrdjW63Y1ut2NbrdjVpAynxGGHlgB/ZnfWzQzEgehjiD1y0hMkgYj0qaZVYFWGINXlvHC53McOtWdvHM3rxpVVQFUYAV/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwATf//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQMBAT8AE3//2Q==",c=document.querySelector(".artists-list"),T=document.querySelector(".filter-list"),o=document.querySelector(".artists-load-more"),N=document.querySelector(".artists-loader"),B=document.querySelector("#search-input"),gt=document.querySelector("#search-btn"),I=document.querySelector("#reset-btn"),R=document.querySelector(".js-filter-genres");let M="",m=1;const $=8;let i=!1,l="",x="";c==null||c.addEventListener("click",t=>{t.target.closest("[data-empty-reset-btn]")&&I.click()});T&&T.addEventListener("change",t=>{M=t.target.value,m=1,c.innerHTML="",P(),f(i,l)});I.addEventListener("click",async function(t){i=!1,l="",M="",x="",m=1,c.innerHTML="",B.value="",await f(i,l)});B.addEventListener("keypress",async function(t){i=!1,t.key==="Enter"&&(t.preventDefault(),l=t.target.value,await f(i,l))});B.addEventListener("change",t=>{l=t.target.value});gt.addEventListener("click",async function(t){i=!1,t.preventDefault(),await f(i,l)});R.addEventListener("change",async function(t){x=t.target.value,m=1,i=!1,P(),await f(i,l)});ht();async function ht(){i=!0,await f(i)}async function f(t,e=""){try{Bt(),Mt();const A=await mt({page:m,limit:$,name:e,sortName:M,genre:x}),s=(A==null?void 0:A.artists)||[];if(!t&&s.length===0){bt(),St();return}vt(s,t),s.length<$?wt():S()}catch{S()}finally{xt()}}function vt(t,e){kt();const A=t.map(Lt).join("");e?c.insertAdjacentHTML("beforeend",A):c.innerHTML=A}function bt(){c.innerHTML=`
    <li class="artists-empty-state">
      <div class="artists-empty-state-card">
        <svg class="artists-empty-state-icon" width="40" height="40">
          <use href="${k}#icon-error-circle"></use>
        </svg>
        <h4 class="artists-empty-state-title">Silence on the stage...</h4>
        <p class="artists-empty-state-text">Looks like no artists match your filters. </br>
        Try changing them or hit “Reset Filters” to bring back the beat.</p>
        <button type="button" class="artists-empty-state-btn" data-empty-reset-btn>
          Reset filters
        </button>
      </div>
    </li>
  `}function kt(){const t=c.querySelector(".artists-empty-state");t&&t.remove()}function Lt(t){var a,r;const e=((a=t.genres)==null?void 0:a.slice(0,4).map(d=>`<li class="artist-tag">${d}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,A=t.strBiographyEN||"A talented artist.",s=A.length>150?A.substring(0,150)+"...":A;return`
    <li class="artist-card">
      <img src="${((r=t.strArtistThumb)==null?void 0:r.trim())||h}" 
           alt="${t.strArtist}" 
           class="artist-image" 
           loading="lazy"
           onerror="this.onerror=null;this.src='${h}'">
      <div class="artist-content">
        <ul class="artist-tags">
          ${e}
        </ul>
        <div class="artist-info">
          <h4 class="artist-name">${t.strArtist}</h4>
          <p class="artist-description">${s}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${t._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${k}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}o&&o.addEventListener("click",Et);async function Et(){i=!0;const t=document.querySelectorAll(".artist-card").length;m+=1;try{await f(i,l)}catch{S();return}setTimeout(()=>{const A=document.querySelectorAll(".artist-card")[t];A&&A.scrollIntoView({behavior:"smooth",block:"start"})},100)}function S(){o.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${k}#icon-down-arrow-alt"></use>
    </svg>
  `,o.disabled=!1,o.style.cursor="pointer",o.style.display="flex"}function wt(){o.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,o.disabled=!0,o.style.cursor="not-allowed"}function St(){o.style.display="none"}function Bt(){o.disabled=!0,o.style.cursor="not-allowed"}function Mt(){N.style.display="block"}function xt(){N.style.display="none"}function P(){const t=R.closest("[data-filter-wrapper]");if(t){t.classList.remove("is-open");const e=t.querySelector("[data-filter-btn]");e&&e.setAttribute("aria-expanded","false")}}function qt(t){const e=document.querySelector(".js-artist-bio");if(!e)return;const A=({intFormedYear:n,intDiedYear:a,strDisbanded:r})=>{const d=n&&n!=="0"?n:null,y=a&&a!=="0"?a:r&&r!=="null"&&r!=="0000-00-00"?r.slice(0,4):null;return d&&y?`${d} - ${y}`:d?`${d} - present`:"—"},s=t.map(({strArtist:n,strArtistThumb:a,intFormedYear:r,strGender:d,intDiedYear:y,strDisbanded:D,intMembers:G,strCountry:U,strBiographyEN:V,genres:Z=[]})=>{const J=A({intFormedYear:r,intDiedYear:y,strDisbanded:D}),X=Z.map(O=>`<li class="modal-tags">${O}</li>`).join(""),Y=(a==null?void 0:a.trim())||h;return`
        <h2 class="sub-title">${n??"Unknown Artist"}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${Y}" alt="${n??"Artist"}" onerror="this.onerror=null;this.src='${h}'" />
      <div class="modal-artist-info-container">
         <ul class="modal-artist-info-list">
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Years active</h3>
            <p class="modal-text">${J}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Sex</h3>
            <p class="modal-text">${d??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
           <h3 class="modal-bold-text">Members</h3>
            <p class="modal-text">${G??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Country</h3>
            <p class="modal-text">${U??"—"}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${V??"—"}
          </p>
        </div>
         <ul class="modal-tags-list">
        ${X}

        </ul> 
      </div>
      </div>
      `}).join("");e.innerHTML=s}function Tt(t){const e=document.querySelector(".js-artist-albums");if(!e)return;if(!t||t.length===0){e.innerHTML="<p>No albums available for this artist.</p>";return}const A=t.map(({strAlbum:s,intYearReleased:n,tracks:a})=>`
        <li class="albums-container">
          <h2 class="album-name">${s} (${n})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${$t(a)}
          </ul>
        </li>
      `).join("");e.innerHTML=A}function $t(t){return t?t.map(({strTrack:e,intDuration:A,movie:s})=>{const n=Math.floor(A/6e4),a=Math.floor(A%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${e}</li>
            <li class="track-time track-info">${n}:${a}</li>
            <li class="track-link track-info">
              ${s&&s!=="null"?`<a class="track-youtube-link" href="${s}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${k}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const p=document.querySelector(".modal"),jt=document.querySelector(".close-btn"),Qt=document.querySelector(".artists-list"),j=document.querySelector(".js-artist-bio"),Q=document.querySelector(".js-artist-albums"),v=document.querySelector(".modal-loader");Qt.addEventListener("click",Nt);jt.addEventListener("click",q);function Ct(){p.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",z),p.addEventListener("click",W)}function q(){p.style.display="none",document.body.classList.remove("modal-open"),j&&(j.innerHTML=""),Q&&(Q.innerHTML=""),F(),window.removeEventListener("keydown",z),p.removeEventListener("click",W)}function Ht(){v&&(v.style.display="block")}function F(){v&&(v.style.display="none")}function z(t){t.code==="Escape"&&q()}function W(t){t.target===p&&q()}async function Nt(t){const e=t.target.closest(".artist-learn-more");if(!e)return;const A=e.dataset.artistId;Ct(),Ht();try{const s=await yt(A);qt([s]),Tt(s.albumsList)}catch{return}finally{F()}}tt();et();it();
//# sourceMappingURL=index.js.map
