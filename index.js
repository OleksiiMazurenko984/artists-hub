import{S as Z,N as D,a as x}from"./assets/vendor-BGP0wUfS.js";(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();function X(){const t=document.querySelector("[data-menu-open]"),A=document.querySelector("[data-menu-close]"),e=document.querySelector("[data-menu]");if(!t||!A||!e)return;const n=()=>{const s=e.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""};t.addEventListener("click",n),A.addEventListener("click",n),e.addEventListener("click",s=>{s.target.closest(".mobile-menu-link")&&n()})}const Y=()=>{const t=document.querySelector("[data-filter-btn]");t&&t.addEventListener("click",()=>{const A=t.closest("[data-filter-wrapper]");if(A){A.classList.toggle("is-open");const e=A.classList.contains("is-open");t.setAttribute("aria-expanded",e)}})},l=new Z(".feedback-swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[D]}),m=document.querySelector(".bullet-first"),g=document.querySelector(".bullet-middle"),y=document.querySelector(".bullet-last");function $(){const t=l.slides.length,A=l.activeIndex;m.classList.remove("is-active"),g.classList.remove("is-active"),y.classList.remove("is-active"),A===0?m.classList.add("is-active"):A===t-1?y.classList.add("is-active"):g.classList.add("is-active")}l.on("slideChange",$);$();m.addEventListener("click",()=>l.slideTo(0));y.addEventListener("click",()=>l.slideTo(l.slides.length-1));g.addEventListener("click",()=>l.slideTo(1));function G(t){const A=Math.round(Number(t.rating)||0),e=t.author??t.name??"Anonymous",n=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${J(A)}
      </div>
      <blockquote class="feedback-text">
        ${n}
      </blockquote>
      <h3 class="feedback-author">
        ${e}
      </h3>
    </li>
  `}function J(t){const A=Math.round(Number(t)||0),e=5;let n="";for(let s=1;s<=e;s++)n+=`
      <span class="star ${s<=A?"active":""}"></span>
    `;return n}function O(t){const A=document.querySelector(".swiper-wrapper"),e=t.map(G).join("");return A.insertAdjacentHTML("beforeend",e)}function K(t){var e;const A=(e=t==null?void 0:t.response)==null?void 0:e.status;return t!=null&&t.response?A>=500?"Server error. Please try again a little later.":A===404?"Requested data was not found.":A===400?"Invalid request. Please refresh the page and try again.":"Request failed. Please try again.":"Network error. Please check your internet connection and try again."}function _(t){var e;const A=K(t);(e=window.iziToast)!=null&&e.error&&window.iziToast.error({title:"Error",message:A,position:"topRight",timeout:4e3})}x.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function tt(t="",A={},e="get"){try{return(await x({url:t,method:e,...A})).data}catch(n){throw At(n),n}}function At(t){var A;(A=t==null?void 0:t.response)==null||A.status,t.response||_(t)}const v={get:(t,A={})=>tt(t,A,"get")};function et(){return v.get("/feedbacks",{params:{limit:10,page:1}})}const u=document.querySelector(".feedback-loader");async function st(){nt();try{const{data:t}=await et();O(t),l.update()}catch{return}finally{at()}}function nt(){u&&(u.style.display="block")}function at(){u&&(u.style.display="none")}st();function it({page:t=1,limit:A=8,sortName:e}={}){const n={page:t,limit:A};return e&&(n.sortName=e),v.get("/artists",{params:n})}function ot(t){return v.get(`/artists/${t}/albums`)}const b="/artists-hub/assets/icons-CdTw6Ne-.svg",f="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQGAwIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/usn8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A6JAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5+kc1Jgppgppgppgp6oWorgAAAAAAAAAAAAAAAAAAAAAAAARrMYzgHoedeRTPDHpzDTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjGc9jRQ+v0hedrCZvi/EPPTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjHjai6yoliolip44Rj0Z9BYAAAAAAAAAAAAAAAAAAAAAAAAAnURz7oBz7oBz7oBz7oBz9CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2Ho5RhAAAAAAAAAAAAAAAAAAAAAAAAAAAANx8LA//8QALRAAAgECAwYGAgMBAAAAAAAAAQIDAAQRFFIQEjFBUFETISIzNHEggTCQoWL/2gAIAQEAAT8AuroRelfNz/lPLJIcXck9aSWSM4o5FWN94/ofycf7Ujl5GY8z1yNzHIrjkf69pZUiGLGs8mhqzyaDWeTQazyaDWeTQazyaDWeTQazyaDWeTQ1RypKMVPU7tiZ2Hby/is2ImA5EHqd18iT8orWJVG8oY88au4FjKsvA8ttp76/R6ndfIk/B4pIwCy4A7IryPcAkxBFXM/jEADBRttPfX6PU7r5Em20g3j4jDyHCpEWRSrc6ljaNyp2GN1UMVIB4Hbae+v0ep3XyJNkEJlfDlzNABQABgBsnhEqf9DhVvaszYyKQo5d6dFdSpHkaliaJyp/R2Wnvr9Hqd18iSlUswUcTUMSxIFH7P5TwiVMOY4GiCpIPEVae+v0ep3XyJKVijBhxFZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStMxZix4k1ae+v0ep3cDFvEUY9xW63Y1ut2NbrdjW63Y1ut2NbrdjW63Y1ut2NbrdjVpAynxGGHlgB/ZnfWzQzEgehjiD1y0hMkgYj0qaZVYFWGINXlvHC53McOtWdvHM3rxpVVQFUYAV/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwATf//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQMBAT8AE3//2Q==",Q=document.querySelector(".artists-list"),w=document.querySelector(".filter-list"),o=document.querySelector(".artists-load-more"),C=document.querySelector(".artists-loader");let T="",k=1;const M=8;w&&w.addEventListener("change",t=>{T=t.target.value,k=1,Q.innerHTML="",L()});rt();async function rt(){await L()}async function L(){try{ft(),pt();const t=await it({page:k,limit:M,sortName:T}),A=(t==null?void 0:t.artists)||[];lt(A),A.length<M?ut():h()}catch{h()}finally{mt()}}function lt(t){const A=t.map(ct).join("");Q.insertAdjacentHTML("beforeend",A)}function ct(t){var a,i;const A=((a=t.genres)==null?void 0:a.slice(0,4).map(r=>`<li class="artist-tag">${r}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,e=t.strBiographyEN||"A talented artist.",n=e.length>150?e.substring(0,150)+"...":e;return`
    <li class="artist-card">
      <img src="${((i=t.strArtistThumb)==null?void 0:i.trim())||f}" 
           alt="${t.strArtist}" 
           class="artist-image" 
           loading="lazy"
           onerror="this.onerror=null;this.src='${f}'">
      <div class="artist-content">
        <ul class="artist-tags">
          ${A}
        </ul>
        <div class="artist-info">
          <h4 class="artist-name">${t.strArtist}</h4>
          <p class="artist-description">${n}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${t._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${b}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}o&&o.addEventListener("click",dt);async function dt(){const t=document.querySelectorAll(".artist-card").length;k+=1;try{await L()}catch{h();return}setTimeout(()=>{const e=document.querySelectorAll(".artist-card")[t];e&&e.scrollIntoView({behavior:"smooth",block:"start"})},100)}function h(){o.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${b}#icon-down-arrow-alt"></use>
    </svg>
  `,o.disabled=!1,o.style.cursor="pointer",o.style.display="flex"}function ut(){o.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,o.disabled=!0,o.style.cursor="not-allowed"}function ft(){o.disabled=!0,o.style.cursor="not-allowed"}function pt(){C.style.display="block"}function mt(){C.style.display="none"}function gt(t){const A=document.querySelector(".js-artist-bio");if(!A)return;const e=({intFormedYear:s,intDiedYear:a,strDisbanded:i})=>{const r=s&&s!=="0"?s:null,d=a&&a!=="0"?a:i&&i!=="null"&&i!=="0000-00-00"?i.slice(0,4):null;return r&&d?`${r} - ${d}`:r?`${r} - present`:"—"},n=t.map(({strArtist:s,strArtistThumb:a,intFormedYear:i,strGender:r,intDiedYear:d,strDisbanded:H,intMembers:I,strCountry:P,strBiographyEN:R,genres:z=[]})=>{const F=e({intFormedYear:i,intDiedYear:d,strDisbanded:H}),W=z.map(V=>`<li class="modal-tags">${V}</li>`).join(""),U=(a==null?void 0:a.trim())||f;return`
        <h2 class="sub-title">${s??"Unknown Artist"}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${U}" alt="${s??"Artist"}" onerror="this.onerror=null;this.src='${f}'" />
      <div class="modal-artist-info-container">
         <ul class="modal-artist-info-list">
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Years active</h3>
            <p class="modal-text">${F}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Sex</h3>
            <p class="modal-text">${r??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
           <h3 class="modal-bold-text">Members</h3>
            <p class="modal-text">${I??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Country</h3>
            <p class="modal-text">${P??"—"}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${R??"—"}
          </p>
        </div>
         <ul class="modal-tags-list">
        ${W}

        </ul> 
      </div>
      </div>
      `}).join("");A.innerHTML=n}function yt(t){const A=document.querySelector(".js-artist-albums");if(!A)return;if(!t||t.length===0){A.innerHTML="<p>No albums available for this artist.</p>";return}const e=t.map(({strAlbum:n,intYearReleased:s,tracks:a})=>`
        <li class="albums-container">
          <h2 class="album-name">${n} (${s})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${ht(a)}
          </ul>
        </li>
      `).join("");A.innerHTML=e}function ht(t){return t?t.map(({strTrack:A,intDuration:e,movie:n})=>{const s=Math.floor(e/6e4),a=Math.floor(e%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${A}</li>
            <li class="track-time track-info">${s}:${a}</li>
            <li class="track-link track-info">
              ${n&&n!=="null"?`<a class="track-youtube-link" href="${n}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${b}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const c=document.querySelector(".modal"),vt=document.querySelector(".close-btn"),bt=document.querySelector(".artists-list"),S=document.querySelector(".js-artist-bio"),B=document.querySelector(".js-artist-albums"),p=document.querySelector(".modal-loader");bt.addEventListener("click",Et);vt.addEventListener("click",E);function kt(){c.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",q),c.addEventListener("click",N)}function E(){c.style.display="none",document.body.classList.remove("modal-open"),S&&(S.innerHTML=""),B&&(B.innerHTML=""),j(),window.removeEventListener("keydown",q),c.removeEventListener("click",N)}function Lt(){p&&(p.style.display="block")}function j(){p&&(p.style.display="none")}function q(t){t.code==="Escape"&&E()}function N(t){t.target===c&&E()}async function Et(t){const A=t.target.closest(".artist-learn-more");if(!A)return;const e=A.dataset.artistId;kt(),Lt();try{const n=await ot(e);gt([n]),yt(n.albumsList)}catch{return}finally{j()}}X();Y();
//# sourceMappingURL=index.js.map
