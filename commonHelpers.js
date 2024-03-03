import{a as d,i as p,g,c as f}from"./assets/vendor-9b1e7844.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const m={MAIN_URl:"https://books-backend.p.goit.global/books/",CATEGORY_LIST_URL:"https://books-backend.p.goit.global/books/category-list",POPULAR_BOOKS_ALL_CATEGORIES:"https://books-backend.p.goit.global/books/top-books",SELECTED_CATEGORY:"https://books-backend.p.goit.global/books/category"};async function b(t,o){return await d.get(t,{params:{category:o}})}const i=document.querySelector(".main-page-books-section");let c=null;async function h(){return await b(m.POPULAR_BOOKS_ALL_CATEGORIES).then(({data:t})=>(i.innerHTML=y(t),c=document.querySelectorAll(".book-shelf-container"),c.forEach((o,s)=>{const r=t[s];o.innerHTML=l([r])}),t)).then(t=>{i.addEventListener("click",o=>{if(o.target.nodeName==="BUTTON"&&o.target.hasAttribute("data-category")){const s=o.target.getAttribute("data-category"),r=t.find(e=>e.list_name===s);i.innerHTML="",i.innerHTML+=l([r])}}),console.log(t)}).catch(t=>console.log(t))}i.addEventListener("click",t=>{t.target.nodeName==="BUTTON"&&t.target.hasAttribute("data-category")&&console.log("hello")});function y(t){return t.map(o=>`<div class="book-shelf">
      <p class="book-shelf-category">${o.list_name}</p>
      <div class="book-shelf-container"></div>
      <button class="see-more-btn" type="button" data-category="${o.list_name}">SEE MORE</button>
    </div>`).join("")}function l(t){return t.map((o,s)=>o.books.map((r,e)=>{let n;window.innerWidth<768?n=1:window.innerWidth<1440?n=3:n=5;const a=window.innerWidth<768&&e===0,u=e<n;return`<div class="book-card-container${a?" marked":""}" style="display: ${u?"block":"none"};">
                <img class="book-card-img" src="${r.book_image}" alt="" />
                <h2 class="book-card-title">${r.title}</h2>
                <p class="book-card-author">${r.author}</p>
              </div>`}).join(""))}h();const k={apiKey:"AIzaSyA3hADlXiNs1sXdUxR8pbsxRLOErTEmqfU",authDomain:"authorisation-3967f.firebaseapp.com",projectId:"authorisation-3967f",storageBucket:"authorisation-3967f.appspot.com",messagingSenderId:"926560198246",appId:"1:926560198246:web:e18f20ad2d2adfa37e97a7"},E=p(k),L=g(E),S=document.querySelector("#signup-form");S.addEventListener("submit",A);function A(t){t.preventDefault();const o=document.getElementById("signup-name").value,s=document.getElementById("signup-email").value;document.getElementById("signup-password").value,f(L,o,s).then(r=>{const e=r.user;console.log("Signed up:",e)}).catch(r=>{r.code;const e=r.message;console.error("Sign up error:",e)})}
//# sourceMappingURL=commonHelpers.js.map
