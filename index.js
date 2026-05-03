import{a as v,S as L,i}from"./assets/vendor-DFyTZyhx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function f(n,r,t){{const a={key:"55607491-fd459ee64175eeb9e585f94df",q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:r},{data:e}=await v.get("https://pixabay.com/api",{params:a});return e}}const b=new L(".gallery-item a",{captionsData:"alt",captionDelay:250});function m(n){let r=n.map(t=>`  <li class="gallery-item">
  <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}"alt="${t.tags}"></a>
        <div class="info">
          <div class="content">
            <p class="name">Likes</p>
            <p>${t.likes}</p>
          </div>
          <div class="content">
            <p class="name">Views</p>
            <p>${t.views}</p>
          </div>
          <div class="content">
            <p class="name">Comments</p>
            <p>${t.comments}</p>
          </div>
          <div class="content">
            <p class="name">Downloads</p>
            <p>${t.downloads}</p>
          </div>
        </div>
      </li>`).join("");s.gallery.insertAdjacentHTML("beforeend",r),w()}function w(){b.refresh()}function g(){return s.loader.classList.add("is-active")}function h(){return s.loader.classList.remove("is-active")}function M(){return s.gallery.innerHTML=""}function y(){return s.loadMoreBtn.classList.remove("is-hidden")}function l(){return s.loadMoreBtn.classList.add("is-hidden")}const s={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let c=1,u=15,d="";s.form.addEventListener("submit",R);s.loadMoreBtn.addEventListener("click",S);async function R(n){if(n.preventDefault(),d=s.input.value.trim(),!d){i.error({message:"input empty",position:"topRight"});return}c=1,l(),g(),M();try{const{total:r,totalHits:t,hits:a}=await f(d,c,u);if(r===0){l(),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const e=Math.ceil(t/u);c<e?y():(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),m(a),s.form.reset()}catch{i.error({message:"Error loud render",position:"topRight"})}finally{await h()}}async function S(){c++,g();try{l();const{totalHits:n,hits:r}=await f(d,c,u),t=Math.ceil(n/u);c<t?y():(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),m(r);const a=s.gallery.children[0].getBoundingClientRect().height;scrollBy({top:a*2,behavior:"smooth"})}catch{i.error({message:"Error loud render",position:"topRight"})}finally{h()}}
//# sourceMappingURL=index.js.map
