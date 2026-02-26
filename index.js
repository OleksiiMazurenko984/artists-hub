import{S as W,N as U,a as M}from"./assets/vendor-BGP0wUfS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();function V(){const A=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),e=document.querySelector("[data-menu]");if(!A||!t||!e)return;const n=()=>{const s=e.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""};A.addEventListener("click",n),t.addEventListener("click",n),e.addEventListener("click",s=>{s.target.closest(".mobile-menu-link")&&n()})}const Z=()=>{const A=document.querySelector("[data-filter-btn]");A&&A.addEventListener("click",()=>{const t=A.closest("[data-filter-wrapper]");if(t){t.classList.toggle("is-open");const e=t.classList.contains("is-open");A.setAttribute("aria-expanded",e)}})},l=new W(".feedback-swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[U]}),m=document.querySelector(".bullet-first"),g=document.querySelector(".bullet-middle"),y=document.querySelector(".bullet-last");function B(){const A=l.slides.length,t=l.activeIndex;m.classList.remove("is-active"),g.classList.remove("is-active"),y.classList.remove("is-active"),t===0?m.classList.add("is-active"):t===A-1?y.classList.add("is-active"):g.classList.add("is-active")}l.on("slideChange",B);B();m.addEventListener("click",()=>l.slideTo(0));y.addEventListener("click",()=>l.slideTo(l.slides.length-1));g.addEventListener("click",()=>l.slideTo(1));function D(A){const t=Math.round(Number(A.rating)||0),e=A.author??A.name??"Anonymous",n=A.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${X(t)}
      </div>
      <blockquote class="feedback-text">
        ${n}
      </blockquote>
      <h3 class="feedback-author">
        ${e}
      </h3>
    </li>
  `}function X(A){const t=Math.round(Number(A)||0),e=5;let n="";for(let s=1;s<=e;s++)n+=`
      <span class="star ${s<=t?"active":""}"></span>
    `;return n}function Y(A){const t=document.querySelector(".swiper-wrapper"),e=A.map(D).join("");return t.insertAdjacentHTML("beforeend",e)}function G(A){var e;const t=(e=A==null?void 0:A.response)==null?void 0:e.status;return A!=null&&A.response?t>=500?"Server error. Please try again a little later.":t===404?"Requested data was not found.":t===400?"Invalid request. Please refresh the page and try again.":"Request failed. Please try again.":"Network error. Please check your internet connection and try again."}function J(A){var e;const t=G(A);(e=window.iziToast)!=null&&e.error&&window.iziToast.error({title:"Error",message:t,position:"topRight",timeout:4e3})}M.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function O(A="",t={},e="get"){try{return(await M({url:A,method:e,...t})).data}catch(n){throw K(n),n}}function K(A){var t;(t=A==null?void 0:A.response)==null||t.status,A.response||J(A)}const b={get:(A,t={})=>O(A,t,"get")};function _(){return b.get("/feedbacks",{params:{limit:10,page:1}})}const u=document.querySelector(".feedback-loader");async function AA(){tA();try{const{data:A}=await _();Y(A),l.update()}catch{return}finally{eA()}}function tA(){u&&(u.style.display="block")}function eA(){u&&(u.style.display="none")}AA();function sA({page:A=1,limit:t=8}={}){return b.get("/artists",{params:{page:A,limit:t}})}function nA(A){return b.get(`/artists/${A}/albums`)}const v="/artists-hub/assets/icons-CdTw6Ne-.svg",f="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQGAwIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/usn8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A6JAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5+kc1Jgppgppgppgp6oWorgAAAAAAAAAAAAAAAAAAAAAAAARrMYzgHoedeRTPDHpzDTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjGc9jRQ+v0hedrCZvi/EPPTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjHjai6yoliolip44Rj0Z9BYAAAAAAAAAAAAAAAAAAAAAAAAAnURz7oBz7oBz7oBz7oBz9CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2Ho5RhAAAAAAAAAAAAAAAAAAAAAAAAAAAANx8LA//8QALRAAAgECAwYGAgMBAAAAAAAAAQIDAAQRFFIQEjFBUFETISIzNHEggTCQoWL/2gAIAQEAAT8AuroRelfNz/lPLJIcXck9aSWSM4o5FWN94/ofycf7Ujl5GY8z1yNzHIrjkf69pZUiGLGs8mhqzyaDWeTQazyaDWeTQazyaDWeTQazyaDWeTQ1RypKMVPU7tiZ2Hby/is2ImA5EHqd18iT8orWJVG8oY88au4FjKsvA8ttp76/R6ndfIk/B4pIwCy4A7IryPcAkxBFXM/jEADBRttPfX6PU7r5Em20g3j4jDyHCpEWRSrc6ljaNyp2GN1UMVIB4Hbae+v0ep3XyJNkEJlfDlzNABQABgBsnhEqf9DhVvaszYyKQo5d6dFdSpHkaliaJyp/R2Wnvr9Hqd18iSlUswUcTUMSxIFH7P5TwiVMOY4GiCpIPEVae+v0ep3XyJKVijBhxFZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStMxZix4k1ae+v0ep3cDFvEUY9xW63Y1ut2NbrdjW63Y1ut2NbrdjW63Y1ut2NbrdjVpAynxGGHlgB/ZnfWzQzEgehjiD1y0hMkgYj0qaZVYFWGINXlvHC53McOtWdvHM3rxpVVQFUYAV/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwATf//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQMBAT8AE3//2Q==",aA=document.querySelector(".artists-list"),o=document.querySelector(".artists-load-more"),S=document.querySelector(".artists-loader");let x=1;const E=8;iA();async function iA(){await $()}async function $(){try{dA(),uA();const A=await sA({page:x,limit:E}),t=(A==null?void 0:A.artists)||[];oA(t),t.length<E?cA():h()}catch{h()}finally{fA()}}function oA(A){const t=A.map(rA).join("");aA.insertAdjacentHTML("beforeend",t)}function rA(A){var a,i;const t=((a=A.genres)==null?void 0:a.slice(0,4).map(r=>`<li class="artist-tag">${r}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,e=A.strBiographyEN||"A talented artist.",n=e.length>150?e.substring(0,150)+"...":e;return`
    <li class="artist-card">
      <img src="${((i=A.strArtistThumb)==null?void 0:i.trim())||f}" 
           alt="${A.strArtist}" 
           class="artist-image" 
           loading="lazy"
           onerror="this.onerror=null;this.src='${f}'">
      <div class="artist-content">
        <ul class="artist-tags">
          ${t}
        </ul>
        <div class="artist-info">
          <h4 class="artist-name">${A.strArtist}</h4>
          <p class="artist-description">${n}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${A._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${v}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}o&&o.addEventListener("click",lA);async function lA(){const A=document.querySelectorAll(".artist-card").length;x+=1;try{await $()}catch{h();return}setTimeout(()=>{const e=document.querySelectorAll(".artist-card")[A];e&&e.scrollIntoView({behavior:"smooth",block:"start"})},100)}function h(){o.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${v}#icon-down-arrow-alt"></use>
    </svg>
  `,o.disabled=!1,o.style.cursor="pointer",o.style.display="flex"}function cA(){o.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,o.disabled=!0,o.style.cursor="not-allowed"}function dA(){o.disabled=!0,o.style.cursor="not-allowed"}function uA(){S.style.display="block"}function fA(){S.style.display="none"}function pA(A){const t=document.querySelector(".js-artist-bio");if(!t)return;const e=({intFormedYear:s,intDiedYear:a,strDisbanded:i})=>{const r=s&&s!=="0"?s:null,d=a&&a!=="0"?a:i&&i!=="null"&&i!=="0000-00-00"?i.slice(0,4):null;return r&&d?`${r} - ${d}`:r?`${r} - present`:"—"},n=A.map(({strArtist:s,strArtistThumb:a,intFormedYear:i,strGender:r,intDiedYear:d,strDisbanded:T,intMembers:q,strCountry:N,strBiographyEN:H,genres:I=[]})=>{const P=e({intFormedYear:i,intDiedYear:d,strDisbanded:T}),R=I.map(F=>`<li class="modal-tags">${F}</li>`).join(""),z=(a==null?void 0:a.trim())||f;return`
        <h2 class="sub-title">${s??"Unknown Artist"}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${z}" alt="${s??"Artist"}" onerror="this.onerror=null;this.src='${f}'" />
      <div class="modal-artist-info-container">
         <ul class="modal-artist-info-list">
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Years active</h3>
            <p class="modal-text">${P}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Sex</h3>
            <p class="modal-text">${r??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
           <h3 class="modal-bold-text">Members</h3>
            <p class="modal-text">${q??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Country</h3>
            <p class="modal-text">${N??"—"}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${H??"—"}
          </p>
        </div>
         <ul class="modal-tags-list">
        ${R}

        </ul> 
      </div>
      </div>
      `}).join("");t.innerHTML=n}function mA(A){const t=document.querySelector(".js-artist-albums");if(!t)return;if(!A||A.length===0){t.innerHTML="<p>No albums available for this artist.</p>";return}const e=A.map(({strAlbum:n,intYearReleased:s,tracks:a})=>`
        <li class="albums-container">
          <h2 class="album-name">${n} (${s})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${gA(a)}
          </ul>
        </li>
      `).join("");t.innerHTML=e}function gA(A){return A?A.map(({strTrack:t,intDuration:e,movie:n})=>{const s=Math.floor(e/6e4),a=Math.floor(e%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${t}</li>
            <li class="track-time track-info">${s}:${a}</li>
            <li class="track-link track-info">
              ${n&&n!=="null"?`<a class="track-youtube-link" href="${n}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${v}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const c=document.querySelector(".modal"),yA=document.querySelector(".close-btn"),hA=document.querySelector(".artists-list"),L=document.querySelector(".js-artist-bio"),w=document.querySelector(".js-artist-albums"),p=document.querySelector(".modal-loader");hA.addEventListener("click",kA);yA.addEventListener("click",k);function bA(){c.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",C),c.addEventListener("click",j)}function k(){c.style.display="none",document.body.classList.remove("modal-open"),L&&(L.innerHTML=""),w&&(w.innerHTML=""),Q(),window.removeEventListener("keydown",C),c.removeEventListener("click",j)}function vA(){p&&(p.style.display="block")}function Q(){p&&(p.style.display="none")}function C(A){A.code==="Escape"&&k()}function j(A){A.target===c&&k()}async function kA(A){const t=A.target.closest(".artist-learn-more");if(!t)return;const e=t.dataset.artistId;bA(),vA();try{const n=await nA(e);pA([n]),mA(n.albumsList)}catch{return}finally{Q()}}V();Z();
//# sourceMappingURL=index.js.map
