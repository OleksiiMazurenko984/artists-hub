import{a as V,S as ft,N as mt,i as Q}from"./assets/vendor-oxP8Dwbs.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))A(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&A(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function A(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();function pt(){const t=document.querySelector("[data-menu-open]"),e=document.querySelector("[data-menu-close]"),s=document.querySelector("[data-menu]");if(!t||!e||!s)return;const A=()=>{const n=s.classList.toggle("is-open");document.body.style.overflow=n?"hidden":""};t.addEventListener("click",A),e.addEventListener("click",A),s.addEventListener("click",n=>{n.target.closest(".mobile-menu-link")&&A()})}const yt=()=>{const t=document.querySelector("[data-filter-btn]");t&&t.addEventListener("click",()=>{const e=t.closest("[data-filter-wrapper]");if(e){e.classList.toggle("is-open");const s=e.classList.contains("is-open");t.setAttribute("aria-expanded",s)}})};function gt(t){var s;const e=(s=t==null?void 0:t.response)==null?void 0:s.status;return t!=null&&t.response?e>=500?"Server error. Please try again a little later.":e===404?"Requested data was not found.":e===400?"Invalid request. Please refresh the page and try again.":"Request failed. Please try again.":"Network error. Please check your internet connection and try again."}function ht(t){var s;const e=gt(t);(s=window.iziToast)!=null&&s.error&&window.iziToast.error({title:"Error",message:e,position:"topRight",timeout:4e3})}V.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function R(t="",e={},s="get"){try{return(await V({url:t,method:s,...e})).data}catch(A){throw vt(A),A}}function vt(t){var e;(e=t==null?void 0:t.response)==null||e.status,t.response||ht(t)}const g={get:(t,e={})=>R(t,e,"get"),post:(t,e={},s={})=>R(t,{...s,data:e},"post")};async function bt(){return await g.get("/genres")}async function Lt(){const t=document.querySelector(".js-filter-genres"),s=(await bt()).map(A=>`
      <li class="filter-item">
        <label class="filter-option">
          <input 
            type="radio" 
            name="genre" 
            value="${A.genre}" 
            class="filter-input-real"
          />
          <span class="filter-custom-text">${A.genre}</span>
        </label>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",s)}const f=new ft(".feedback-swiper",{spaceBetween:20,loop:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[mt]}),B=document.querySelector(".bullet-first"),M=document.querySelector(".bullet-middle"),q=document.querySelector(".bullet-last");function z(){const t=f.slides.length,e=f.activeIndex;B.classList.remove("is-active"),M.classList.remove("is-active"),q.classList.remove("is-active"),e===0?B.classList.add("is-active"):e===t-1?q.classList.add("is-active"):M.classList.add("is-active")}f.on("slideChange",z);z();B.addEventListener("click",()=>f.slideTo(0));q.addEventListener("click",()=>f.slideTo(f.slides.length-1));M.addEventListener("click",()=>f.slideTo(1));function kt(t){const e=Math.round(Number(t.rating)||0),s=t.author??t.name??"Anonymous",A=t.descr??"";return`
    <li class="swiper-slide">
      <div class="stars-static">
        ${Et(e)}
      </div>
      <blockquote class="feedback-text">
        ${A}
      </blockquote>
      <h3 class="feedback-author">
        ${s}
      </h3>
    </li>
  `}function Et(t){const e=Math.round(Number(t)||0),s=5;let A="";for(let n=1;n<=s;n++)A+=`
      <span class="star ${n<=e?"active":""}"></span>
    `;return A}function St(t){const e=document.querySelector(".swiper-wrapper"),s=t.map(kt).join("");return e.insertAdjacentHTML("beforeend",s)}function wt(){return g.get("/feedbacks",{params:{limit:10,page:1}})}function Bt({name:t,rating:e,descr:s}){return g.post("/feedbacks",{name:t,rating:e,descr:s})}const b=document.querySelector(".feedback-loader");async function Mt(){qt();try{const{data:t}=await wt();St(t),f.update()}catch{return}finally{xt()}}function qt(){b&&(b.style.display="block")}function xt(){b&&(b.style.display="none")}Mt();const W=document.querySelectorAll(".star-modal");let N=0;W.forEach(t=>{t.addEventListener("click",()=>{N=t.dataset.value,Ct(N)})});function Ct(t){W.forEach(e=>{e.classList.toggle("active",e.dataset.value<=t)})}const Tt=document.querySelector(".btn-feedback-modal"),p=document.querySelector(".backdrop"),$t=document.querySelector(".btn-close-feedback"),u=document.querySelector(".modal-form"),jt=document.querySelectorAll(".star-modal"),G=u.querySelector("#user-name"),U=u.querySelector("#user-comment"),Qt=u.querySelector(".rating-error");let E=!1;Tt.addEventListener("click",()=>{document.body.classList.add("modal-open"),p.classList.add("is-open"),window.addEventListener("keydown",O)});p.addEventListener("click",X);$t.addEventListener("click",Nt);u.addEventListener("input",()=>{E&&Z()});jt.forEach(t=>{t.addEventListener("click",()=>{E&&J()})});u.addEventListener("submit",async t=>{if(t.preventDefault(),E=!0,!Z())return;const s=document.querySelectorAll(".star-modal.active").length,A=new FormData(u),n=Object.fromEntries(A.entries()),a={name:n.userName.trim(),rating:+s,descr:n.userComment.trim()};try{await Bt(a),Q.success({title:"Дякую за відгук!",message:"Ваше повідомлення відправлено!",position:"topRight",timeout:2e3}),u.reset(),S(),Ht(),Rt()}catch{Q.error({title:"Дані не були відправленні",message:"Відбулася помилка під час запиту!",position:"topRight",timeout:1e3})}});function Z(){const t=H(G),e=H(U),s=J();return t&&e&&s}function H(t){const e=t.parentElement.querySelector(".text-error"),s=t.checkValidity();return t.classList.toggle("is-invalid",!s),e.classList.toggle("show",!s),s}function J(){const t=document.querySelector(".star-modal.active")!==null;return Qt.classList.toggle("show",!t),t}function Rt(){E=!1,G.classList.remove("is-invalid"),U.classList.remove("is-invalid"),u.querySelectorAll(".text-error").forEach(t=>t.classList.remove("show"))}function S(){p.classList.remove("is-open"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",O),p.removeEventListener("click",X)}function O(t){t.code==="Escape"&&p.classList.contains("is-open")&&S()}function X(t){t.target===p&&S()}function Nt(){S()}function Ht(){document.querySelectorAll(".star-modal").forEach(e=>e.classList.remove("active"))}function It({page:t=1,limit:e=8,name:s,sortName:A,genre:n}={}){const a={page:t,limit:e};return A&&(a.sortName=A),s&&(a.name=s),n&&(a.genre=n),g.get("/artists",{params:a})}function Ft(t){return g.get(`/artists/${t}/albums`)}const w="/artists-hub/assets/icons-DSJOWbPK.svg",L="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQGAwIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/usn8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A6JAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5+kc1Jgppgppgppgp6oWorgAAAAAAAAAAAAAAAAAAAAAAAARrMYzgHoedeRTPDHpzDTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjGc9jRQ+v0hedrCZvi/EPPTm0lgAAAAAAAAAAAAAAAAAAAAAAAACNZjHjai6yoliolip44Rj0Z9BYAAAAAAAAAAAAAAAAAAAAAAAAAnURz7oBz7oBz7oBz7oBz9CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2Ho5RhAAAAAAAAAAAAAAAAAAAAAAAAAAAANx8LA//8QALRAAAgECAwYGAgMBAAAAAAAAAQIDAAQRFFIQEjFBUFETISIzNHEggTCQoWL/2gAIAQEAAT8AuroRelfNz/lPLJIcXck9aSWSM4o5FWN94/ofycf7Ujl5GY8z1yNzHIrjkf69pZUiGLGs8mhqzyaDWeTQazyaDWeTQazyaDWeTQazyaDWeTQ1RypKMVPU7tiZ2Hby/is2ImA5EHqd18iT8orWJVG8oY88au4FjKsvA8ttp76/R6ndfIk/B4pIwCy4A7IryPcAkxBFXM/jEADBRttPfX6PU7r5Em20g3j4jDyHCpEWRSrc6ljaNyp2GN1UMVIB4Hbae+v0ep3XyJNkEJlfDlzNABQABgBsnhEqf9DhVvaszYyKQo5d6dFdSpHkaliaJyp/R2Wnvr9Hqd18iSlUswUcTUMSxIFH7P5TwiVMOY4GiCpIPEVae+v0ep3XyJKVijBhxFZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStZ6XStMxZix4k1ae+v0ep3cDFvEUY9xW63Y1ut2NbrdjW63Y1ut2NbrdjW63Y1ut2NbrdjVpAynxGGHlgB/ZnfWzQzEgehjiD1y0hMkgYj0qaZVYFWGINXlvHC53McOtWdvHM3rxpVVQFUYAV/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwATf//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQMBAT8AE3//2Q==",c=document.querySelector(".artists-list"),I=document.querySelector(".filter-list"),o=document.querySelector(".artists-load-more"),Y=document.querySelector(".artists-loader"),C=document.querySelector("#search-input"),Pt=document.querySelector("#search-btn"),K=document.querySelector("#reset-btn"),_=document.querySelector(".js-filter-genres");let T="",h=1;const F=8;let i=!1,l="",$="";c==null||c.addEventListener("click",t=>{t.target.closest("[data-empty-reset-btn]")&&K.click()});I&&I.addEventListener("change",t=>{T=t.target.value,h=1,c.innerHTML="",tt(),m(i,l)});K.addEventListener("click",async function(t){i=!1,l="",T="",$="",h=1,c.innerHTML="",C.value="",await m(i,l)});C.addEventListener("keypress",async function(t){i=!1,t.key==="Enter"&&(t.preventDefault(),l=t.target.value,await m(i,l))});C.addEventListener("change",t=>{l=t.target.value});Pt.addEventListener("click",async function(t){i=!1,t.preventDefault(),await m(i,l)});_.addEventListener("change",async function(t){$=t.target.value,h=1,i=!1,tt(),await m(i,l)});Dt();async function Dt(){i=!0,await m(i)}async function m(t,e=""){try{Ot(),Xt();const s=await It({page:h,limit:F,name:e,sortName:T,genre:$}),A=(s==null?void 0:s.artists)||[];if(!t&&A.length===0){zt(),Jt();return}Vt(A,t),A.length<F?Zt():x()}catch{x()}finally{Yt()}}function Vt(t,e){Wt();const s=t.map(Gt).join("");e?c.insertAdjacentHTML("beforeend",s):c.innerHTML=s}function zt(){c.innerHTML=`
    <li class="artists-empty-state">
      <div class="artists-empty-state-card">
        <svg class="artists-empty-state-icon" width="40" height="40">
          <use href="${w}#icon-error-circle"></use>
        </svg>
        <h4 class="artists-empty-state-title">Silence on the stage...</h4>
        <p class="artists-empty-state-text">Looks like no artists match your filters. </br>
        Try changing them or hit “Reset Filters” to bring back the beat.</p>
        <button type="button" class="artists-empty-state-btn" data-empty-reset-btn>
          Reset filters
        </button>
      </div>
    </li>
  `}function Wt(){const t=c.querySelector(".artists-empty-state");t&&t.remove()}function Gt(t){var a,r;const e=((a=t.genres)==null?void 0:a.slice(0,4).map(d=>`<li class="artist-tag">${d}</li>`).join(""))||`
      <li class="artist-tag">Alternative</li>
      <li class="artist-tag">Pop</li>
      <li class="artist-tag">Rock</li>
      <li class="artist-tag">Indie</li>
    `,s=t.strBiographyEN||"A talented artist.",A=s.length>150?s.substring(0,150)+"...":s;return`
    <li class="artist-card">
      <img src="${((r=t.strArtistThumb)==null?void 0:r.trim())||L}" 
           alt="${t.strArtist}" 
           class="artist-image" 
           loading="lazy"
           onerror="this.onerror=null;this.src='${L}'">
      <div class="artist-content">
        <ul class="artist-tags">
          ${e}
        </ul>
        <div class="artist-info">
          <h4 class="artist-name">${t.strArtist}</h4>
          <p class="artist-description">${A}</p>
        </div>
      </div>
      <button type="button" class="artist-learn-more" data-artist-id="${t._id}">
        <span>Learn More</span>
        <svg class="artist-icon" width="24" height="24">
           <use href="${w}#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `}o&&o.addEventListener("click",Ut);async function Ut(){i=!0;const t=document.querySelectorAll(".artist-card").length;h+=1;try{await m(i,l)}catch{x();return}setTimeout(()=>{const s=document.querySelectorAll(".artist-card")[t];s&&s.scrollIntoView({behavior:"smooth",block:"start"})},100)}function x(){o.innerHTML=`
    <span>Load More</span>
    <svg class="load-more-icon" width="24" height="24">
       <use href="${w}#icon-down-arrow-alt"></use>
    </svg>
  `,o.disabled=!1,o.style.cursor="pointer",o.style.display="flex"}function Zt(){o.innerHTML=`
    <span>Sorry, you have reached the limit.</span>
  `,o.disabled=!0,o.style.cursor="not-allowed"}function Jt(){o.style.display="none"}function Ot(){o.disabled=!0,o.style.cursor="not-allowed"}function Xt(){Y.style.display="block"}function Yt(){Y.style.display="none"}function tt(){const t=_.closest("[data-filter-wrapper]");if(t){t.classList.remove("is-open");const e=t.querySelector("[data-filter-btn]");e&&e.setAttribute("aria-expanded","false")}}function Kt(t){const e=document.querySelector(".js-artist-bio");if(!e)return;const s=({intFormedYear:n,intDiedYear:a,strDisbanded:r})=>{const d=n&&n!=="0"?n:null,v=a&&a!=="0"?a:r&&r!=="null"&&r!=="0000-00-00"?r.slice(0,4):null;return d&&v?`${d} - ${v}`:d?`${d} - present`:"—"},A=t.map(({strArtist:n,strArtistThumb:a,intFormedYear:r,strGender:d,intDiedYear:v,strDisbanded:At,intMembers:at,strCountry:rt,strBiographyEN:it,genres:ot=[]})=>{const ct=s({intFormedYear:r,intDiedYear:v,strDisbanded:At}),lt=ot.map(ut=>`<li class="modal-tags">${ut}</li>`).join(""),dt=(a==null?void 0:a.trim())||L;return`
        <h2 class="sub-title">${n??"Unknown Artist"}</h2>
    <div class="laptop-container">
      <img class="artist-avatar" src="${dt}" alt="${n??"Artist"}" onerror="this.onerror=null;this.src='${L}'" />
      <div class="modal-artist-info-container">
         <ul class="modal-artist-info-list">
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Years active</h3>
            <p class="modal-text">${ct}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Sex</h3>
            <p class="modal-text">${d??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
           <h3 class="modal-bold-text">Members</h3>
            <p class="modal-text">${at??"—"}</p>
          </li>
          <li class="modal-artist-info-item">
            <h3 class="modal-bold-text">Country</h3>
            <p class="modal-text">${rt??"—"}</p>
          </li>
        </ul>
        <div class="biography">
          <h3 class="bold-text">Biography</h3>
          <p class="text">${it??"—"}
          </p>
        </div>
         <ul class="modal-tags-list">
        ${lt}

        </ul> 
      </div>
      </div>
      `}).join("");e.innerHTML=A}function _t(t){const e=document.querySelector(".js-artist-albums");if(!e)return;if(!t||t.length===0){e.innerHTML="<p>No albums available for this artist.</p>";return}const s=t.map(({strAlbum:A,intYearReleased:n,tracks:a})=>`
        <li class="albums-container">
          <h2 class="album-name">${A} (${n})</h2>
          
          <ul class="track-info-text-list">
            <li class="track-info-text">Track</li>
            <li class="track-info-text">Time</li>
            <li class="track-info-text">Link</li>
          </ul>

          <ul class="track-list">
            ${te(a)}
          </ul>
        </li>
      `).join("");e.innerHTML=s}function te(t){return t?t.map(({strTrack:e,intDuration:s,movie:A})=>{const n=Math.floor(s/6e4),a=Math.floor(s%6e4/1e3).toString().padStart(2,"0");return`
        <li class="track">
          <ul class="track-info-list">
            <li class="track-name track-info">${e}</li>
            <li class="track-time track-info">${n}:${a}</li>
            <li class="track-link track-info">
              ${A&&A!=="null"?`<a class="track-youtube-link" href="${A}" target="_blank" rel="noopener noreferrer">
                       <svg class="youtube-svg" width="24" height="24">
                         <use href="${w}#icon-youtube"></use>
                       </svg>
                     </a>`:""}
            </li>
          </ul>
        </li>
      `}).join(""):""}const y=document.querySelector(".modal"),ee=document.querySelector(".close-btn"),se=document.querySelector(".artists-list"),P=document.querySelector(".js-artist-bio"),D=document.querySelector(".js-artist-albums"),k=document.querySelector(".modal-loader");se.addEventListener("click",ae);ee.addEventListener("click",j);function ne(){y.style.display="flex",document.body.classList.add("modal-open"),window.addEventListener("keydown",st),y.addEventListener("click",nt)}function j(){y.style.display="none",document.body.classList.remove("modal-open"),P&&(P.innerHTML=""),D&&(D.innerHTML=""),et(),window.removeEventListener("keydown",st),y.removeEventListener("click",nt)}function Ae(){k&&(k.style.display="block")}function et(){k&&(k.style.display="none")}function st(t){t.code==="Escape"&&j()}function nt(t){t.target===y&&j()}async function ae(t){const e=t.target.closest(".artist-learn-more");if(!e)return;const s=e.dataset.artistId;ne(),Ae();try{const A=await Ft(s);Kt([A]),_t(A.albumsList)}catch{return}finally{et()}}pt();yt();Lt();
//# sourceMappingURL=index.js.map
