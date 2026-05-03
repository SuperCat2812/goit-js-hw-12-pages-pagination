import{a as y,S as v,i as n}from"./assets/vendor-DFyTZyhx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();async function m(i,o,t){const a={key:"55607491-fd459ee64175eeb9e585f94df",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:o},{data:e}=await y.get("https://pixabay.com/api",{params:a});return e}const L=new v(".gallery-item a",{captionsData:"alt",captionDelay:250});function f(i){let o=i.map(t=>`  <li class="gallery-item">
  <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}"alt="${t.tags}"></a>
        <div class="info">
          <div class=content>
            <p class="name">Likes</p>
            <p>${t.likes}</p>
          </div class=content>
          <div class=content>
            <p class="name">Views</p>
            <p>${t.views}</p>
          </div>
          <div class=content>
            <p class="name">Comments</p>
            <p>${t.comments}</p>
          </div>
          <div class=content>
            <p class="name">Downloads</p>
            <p>${t.downloads}</p>
          </div>
        </div>
      </li>`).join("");r.gallery.insertAdjacentHTML("beforeend",o)}function g(){L.refresh()}function b(){return r.loader.classList.add("is-active")}function h(){return r.loader.classList.remove("is-active")}function M(){return r.gallery.innerHTML=""}const r={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".load-more-btn ")};let l=1,c=15,d="";r.form.addEventListener("submit",R);r.loaderMore.addEventListener("click",p);async function R(i){if(i.preventDefault(),r.loaderMore.classList.add("is-hidden"),d=r.input.value.trim(),!d){n.error({message:"input empty",position:"topRight"});return}b(),M();try{const{total:o,totalHits:t,hits:a}=await m(d,l,c);if(o===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}t/c>1&&r.loaderMore.classList.remove("is-hidden"),t/c<=l&&(r.loaderMore.classList.add("is-hidden"),r.loaderMore.removeEventListener("click",p),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),f(a),g(),r.form.reset()}catch{n.error({message:"Error loud render",position:"topRight"})}finally{await h()}}async function p(){l++;try{const{totalHits:i,hits:o}=await m(d,l,c);i>1&&r.loaderMore.classList.remove("is-hidden"),i/c<=l&&(r.loaderMore.classList.add("is-hidden"),r.loaderMore.removeEventListener("click",p),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),f(o),g();const t=r.gallery.children[0].getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}catch{n.error({message:"Error loud render",position:"topRight"})}finally{h()}}
//# sourceMappingURL=index.js.map
