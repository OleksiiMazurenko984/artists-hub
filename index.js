import{S as Y,N as G,a as C}from"./assets/vendor-BGP0wUfS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function A(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=A(s);fetch(s.href,a)}})();function J(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),A=document.querySelector("[data-menu]");if(!t||!e||!A)return;const n=()=>{const s=A.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""};t.addEventListener("click",n),e.addEventListener("click",n),A.addEventListener("click",s=>{s.target.closest(".mobile-menu-link")&&n()})}const O=()=>{const t=document.querySelector("[data-filter-btn]");t&&t.addEventListener("click",()=>{const e=t.closest("[data-filter-wrapper]");if(e){e.classList.toggle("is-open");const A=e.classList.contains("is-open");t.setAttribute("aria-expanded",A)}})},c=new Y(".feedback-swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[G]}),v=document.querySelector(".bullet-first"),b=document.querySelector(".bullet-middle"),k=document.querySelector(".bullet-last");function T(){const t=c.slides.length,e=c.activeIndex;v.classList.remove("is-active"),b.classList.remove("is-active"),k.classList.remove("is-active"),e===0?v.classList.add("is-active"):e===t-1?k.classList.add("is-active"):b.classList.add("is-active")}c.on("slideChange",T);T();v.addEventListener("click",()=>c.slideTo(0));k.addEventListener("click",()=>c.slideTo(c.slides.length-1));b.addEventListener("click",()=>c.slideTo(1));function K(t){const e=Math.round(Number(t.rating)||0),A=t.author??t.name??"Anonymous",n=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${_(e)}
      </div>
      <blockquote class="feedback-text">
        ${n}
      </blockquote>
      <h3 class="feedback-author">
        ${A}
      </h3>
    </li>
  `}function _(t){const e=Math.round(Number(t)||0),A=5;let n="";for(let s=1;s<=A;s++)n+=`
      <span class="star ${s<=e?"active":""}"></span>
    `;return n}function tt(t){const e=document.querySelector(".swiper-wrapper"),A=t.map(K).join("");return e.insertAdjacentHTML("beforeend",A)}function et(t){var A;const e=(A=t==null?void 0:t.response)==null?void 0:A.status;return t!=null&&t.response?e>=500?"Server error. Please try again a little later.":e===404?"Requested data was not found.":e===400?"Invalid request. Please refresh the page and try again.":"Request failed. Please try again.":"Network error. Please check your internet connection and try again."}function At(t){var A;const e=et(t);(A=window.iziToast)!=null&&A.error&&window.iziToast.error({title:"Error",message:e,position:"topRight",timeout:4e3})}C.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function st(t="",e={},A="get"){try{return(await C({url:t,method:A,...e})).data}catch(n){throw nt(n),n}}function nt(t){var e;(e=t==null?void 0:t.response)==null||e.status,t.response||At(t)}const w={get:(t,e={})=>st(t,e,"get")};function at(){return w.get("/feedbacks",{params:{limit:10,page:1}})}const m=document.querySelector(".feedback-loader");async function it(){rt();try{const{data:t}=await at();tt(t),c.update()}catch{return}finally{ot()}}function rt(){m&&(m.style.display="block")}function ot(){m&&(m.style.display="none")}it();function lt({page:t=1,limit:e=8,name:A,sortName:n}={}){const s={page:t,limit:e};return n&&(s.sortName=n),A&&(s.name=A),w.get("/artists",{params:s})}function ct(t){return w.get(`/artists/${t}/albums`)}const S="/artists-hub/assets/icons-CdTw6Ne-.svg",y="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQGAwIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/usn8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A6JAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5+kc1Jgppgppgppgp6oWorgAAAAAAAAAAAAAAAAAAAAAAAARrMYzgHoedeRTPDHpzDTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjGc9jRQ+v0hedrCZvi/EPPTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjHjai6yoliolip44Rj0Z9BYAAAAAAAAAAAAAAAAAAAAAAAAAnURz7oBz7oBz7oBz7oBz9CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2Ho5RhAAAAAAAAAAAAAAAAAAAAAAAAAAAANx8LA//8QALRAAAgECAwYGAgMBAAAAAAAAAQIDAAQRFFIQEjFBUFETISIzNHEggTCQoWL/2gAIAQEAAT8AuroRelfNz/lPLJIcXck9aSWSM4o5FWN94/ofycf7Ujl5GY8z1yNzHIrjkf69pZUiGLGs8mhqzyaDWeTQazyaDWeTQazyaDWeTQazyaDWeTQ1RypKMVPU7tiZ2Hby/is2ImA5EHqd18iT8orWJVG8oY88au4FjKsvA8ttp76/R6ndfIk/B4pIwCy4A7IryPcAkxBFXM/jEADBRttPfX6PU7r5Em20g3j4jDyHCpEWRSrc6ljaNyp2GN1UMVIB4Hbae+v0ep3XyJNkEJlfDlzNABQABgBsnhEqf9DhVvaszYyKQo5d6dFdSpHkaliaJyp/R2Wnvr9Hqd18iSlUswUcTUMSxIFH7P5TwiVMOY4GiCpIPEVae+v0ep3XyJKVijBhxFZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStMxZix4k1ae+v0ep3cDFvEUY9xW63Y1ut2NbrdjW63Y1ut2NbrdjW63Y1ut2NbrdjVpAynxGGHlgB/ZnfWzQzEgehjiD1y0hMkgYj0qaZVYFWGINXlvHC53McOtWdvHM3rxpVVQFUYAV/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwATf//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQMBAT8AE3//2Q==",L=document.querySelector(".artists-list"),x=document.querySelector(".filter-list"),r=document.querySelector(".artists-load-more"),N=document.querySelector(".artists-loader"),j=document.querySelector("#search-input"),dt=document.querySelector("#search-btn"),ut=document.querySelector("#reset-btn");let B="",h=1;const $=8;let o=!1,d="";x&&x.addEventListener("change",t=>{B=t.target.value,h=1,L.innerHTML="",u(o,d)});ut.addEventListener("click",async function(t){o=!1,d="",B="",h=1,await u(o,d)});j.addEventListener("keypress",async function(t){o=!1,t.key==="Enter"&&(t.preventDefault(),d=t.target.value,await u(o,d))});j.addEventListener("change",t=>{d=t.target.value});dt.addEventListener("click",async function(t){o=!1,t.preventDefault(),await u(o,d)});ft();async function ft(){o=!0,await u(o)}async function u(t,e=""){try{ht(),vt();const A=await lt({page:h,limit:$,name:e,sortName:B}),n=(A==null?void 0:A.artists)||[];pt(n,t),n.length<$?gt():E()}catch{E()}finally{bt()}}function pt(t,e){const A=t.map(mt).join("");e?L.insertAdjacentHTML("beforeend",A):L.innerHTML=A}function mt(t){var a,i;const e=((a=t.genres)==null?void 0:a.slice(0,4).map(l=>`<li class="artist-tag">${l}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,A=t.strBiographyEN||"A talented artist.",n=A.length>150?A.substring(0,150)+"...":A;return`
    <li class="artist-card">
      <img src="${((i=t.strArtistThumb)==null?void 0:i.trim())||y}" 
           alt="${t.strArtist}" 
           class="artist-image" 
           loading="lazy"
           onerror="this.onerror=null;this.src='${y}'">
      <div class="artist-content">
        <ul class="artist-tags">
          ${e}
        </ul>
        <div class="artist-info">
          <h4 class="artist-name">${t.strArtist}</h4>
          <p class="artist-description">${n}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${t._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${S}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}r&&r.addEventListener("click",yt);async function yt(){o=!0;const t=document.querySelectorAll(".artist-card").length;h+=1;try{await u(o,d)}catch{E();return}setTimeout(()=>{const A=document.querySelectorAll(".artist-card")[t];A&&A.scrollIntoView({behavior:"smooth",block:"start"})},100)}function E(){r.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${S}#icon-down-arrow-alt"></use>
    </svg>
  `,r.disabled=!1,r.style.cursor="pointer",r.style.display="flex"}function gt(){r.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,r.disabled=!0,r.style.cursor="not-allowed"}function ht(){r.disabled=!0,r.style.cursor="not-allowed"}function vt(){N.style.display="block"}function bt(){N.style.display="none"}function kt(t){const e=document.querySelector(".js-artist-bio");if(!e)return;const A=({intFormedYear:s,intDiedYear:a,strDisbanded:i})=>{const l=s&&s!=="0"?s:null,p=a&&a!=="0"?a:i&&i!=="null"&&i!=="0000-00-00"?i.slice(0,4):null;return l&&p?`${l} - ${p}`:l?`${l} - present`:"—"},n=t.map(({strArtist:s,strArtistThumb:a,intFormedYear:i,strGender:l,intDiedYear:p,strDisbanded:R,intMembers:z,strCountry:F,strBiographyEN:W,genres:D=[]})=>{const U=A({intFormedYear:i,intDiedYear:p,strDisbanded:R}),V=D.map(X=>`<li class="modal-tags">${X}</li>`).join(""),Z=(a==null?void 0:a.trim())||y;return`
        <h2 class="sub-title">${s??"Unknown Artist"}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${Z}" alt="${s??"Artist"}" onerror="this.onerror=null;this.src='${y}'" />
      <div class="modal-artist-info-container">
         <ul class="modal-artist-info-list">
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Years active</h3>
            <p class="modal-text">${U}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Sex</h3>
            <p class="modal-text">${l??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
           <h3 class="modal-bold-text">Members</h3>
            <p class="modal-text">${z??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Country</h3>
            <p class="modal-text">${F??"—"}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${W??"—"}
          </p>
        </div>
         <ul class="modal-tags-list">
        ${V}

        </ul> 
      </div>
      </div>
      `}).join("");e.innerHTML=n}function Lt(t){const e=document.querySelector(".js-artist-albums");if(!e)return;if(!t||t.length===0){e.innerHTML="<p>No albums available for this artist.</p>";return}const A=t.map(({strAlbum:n,intYearReleased:s,tracks:a})=>`
        <li class="albums-container">
          <h2 class="album-name">${n} (${s})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${Et(a)}
          </ul>
        </li>
      `).join("");e.innerHTML=A}function Et(t){return t?t.map(({strTrack:e,intDuration:A,movie:n})=>{const s=Math.floor(A/6e4),a=Math.floor(A%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${e}</li>
            <li class="track-time track-info">${s}:${a}</li>
            <li class="track-link track-info">
              ${n&&n!=="null"?`<a class="track-youtube-link" href="${n}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${S}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const f=document.querySelector(".modal"),wt=document.querySelector(".close-btn"),St=document.querySelector(".artists-list"),q=document.querySelector(".js-artist-bio"),Q=document.querySelector(".js-artist-albums"),g=document.querySelector(".modal-loader");St.addEventListener("click",xt);wt.addEventListener("click",M);function Bt(){f.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",I),f.addEventListener("click",P)}function M(){f.style.display="none",document.body.classList.remove("modal-open"),q&&(q.innerHTML=""),Q&&(Q.innerHTML=""),H(),window.removeEventListener("keydown",I),f.removeEventListener("click",P)}function Mt(){g&&(g.style.display="block")}function H(){g&&(g.style.display="none")}function I(t){t.code==="Escape"&&M()}function P(t){t.target===f&&M()}async function xt(t){const e=t.target.closest(".artist-learn-more");if(!e)return;const A=e.dataset.artistId;Bt(),Mt();try{const n=await ct(A);kt([n]),Lt(n.albumsList)}catch{return}finally{H()}}J();O();
//# sourceMappingURL=index.js.map
