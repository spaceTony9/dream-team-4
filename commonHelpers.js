import"./assets/header-chenges-theme-215be169.js";import{a as g,i as k,g as v}from"./assets/vendor-0e8f1ced.js";const c={MAIN_URl:"https://books-backend.p.goit.global/books/",CATEGORY_LIST_URL:"https://books-backend.p.goit.global/books/category-list",POPULAR_BOOKS_ALL_CATEGORIES:"https://books-backend.p.goit.global/books/top-books",SELECTED_CATEGORY:"https://books-backend.p.goit.global/books/category"};async function l(t,e){return await g.get(t,{params:{category:e}})}const i=document.querySelector(".main-page-books-section");document.querySelector(".best-sellers-books-section");const S=document.querySelector(".best-sellers-header"),L=document.querySelector(".categories");let d=null;async function p(){return await l(c.POPULAR_BOOKS_ALL_CATEGORIES).then(({data:t})=>(S.innerHTML="Best Sellers <span>Books</span>",i.innerHTML=E(t),d=document.querySelectorAll(".book-shelf-container"),d.forEach((e,o)=>{const n=t[o];return e.innerHTML=_([n]),t}),C(),t)).catch(t=>console.log(t))}function E(t){return t.map(e=>`<div class="book-shelf">
      <p class="book-shelf-category">${e.list_name}</p>
      <div class="book-shelf-container"></div>
      <button class="see-more-btn" type="button" data-category="${e.list_name}">SEE MORE</button>
    </div>`).join("")}function C(){return i.addEventListener("click",t=>{t.target.nodeName==="BUTTON"&&t.target.hasAttribute("data-category")&&l(c.SELECTED_CATEGORY,t.target.getAttribute("data-category")).then(({data:e})=>{t.stopPropagation(),i.innerHTML="",i.classList.add("book-grid"),i.innerHTML=m(e)}).catch(e=>console.error(e))})}function B(){return L.addEventListener("click",t=>{t.target.nodeName==="BUTTON"&&t.target.hasAttribute("data-id")?l(c.SELECTED_CATEGORY,t.target.getAttribute("data-id")).then(({data:e})=>{t.stopPropagation(),i.innerHTML="",i.classList.add("book-grid"),i.innerHTML=m(e)}).catch(e=>console.error(e)):t.target.nodeName==="BUTTON"&&t.target.hasAttribute("name")&&p()})}function _(t){return t.map((e,o)=>e.books.map((n,s)=>{let a;window.innerWidth<768?a=1:window.innerWidth<1440?a=3:a=5;const f=window.innerWidth<768&&s===0,y=s<a;return`<div class="book-card-container${f?" marked":""}" style="display: ${y?"block":"none"};"><a class="book-item-link" href="#" data-bookid="${n._id}">
            <img class="book-card-img" src="${n.book_image}" alt="" />
            <h2 class="book-card-title">${n.title}</h2>
            <p class="book-card-author">${n.author}</p>
              </div>`}).join(""))}function m(t){const e=document.querySelector(".best-sellers-header");console.log(t),e.textContent=t[0].list_name;const o=e.textContent.split(" "),n=o.pop();return e.innerHTML=o.join(" ")+' <span style="color: #4f2ee8;">'+n+"</span>",t.map(s=>`<div class="book-card-container" ><a class="book-item-link" href="#" data-bookid="${s._id}">
            <img class="book-card-img" src="${s.book_image}" alt="" />
            <h2 class="book-card-title">${s.title}</h2>
            <p class="book-card-author">${s.author}</p></div>`).join("")}p();const w=document.querySelector(".header-btn"),r=document.querySelector(".section-container"),u=document.querySelector(".sighup-container");w.addEventListener("click",t=>{r.classList.remove("is-hidden"),b(),document.querySelector("#signup-form")});u.addEventListener("click",t=>{if(t.target.closest(".close-form-btn")){r.classList.add("is-hidden");return}t.target.getAttribute("class")==="sighin-link"?(r.classList.add("log-in-container"),A()):t.target.getAttribute("class")==="signup-link"&&b()});function b(){u.innerHTML=`
  <button type="button" class="close-form-btn ">
  <span><svg class="close-form-icon " width="16" height="16">
  <use href="./img/symbol-defs.svg#icon-close-black"></use></svg></span>

  </button>
          <form id="signup-form" class="signup-form">
            <div class="signup-name">
              <input
                type="text"
                id="signup-name"
                placeholder="Name"
                class="name-input"
              />
            </div>
            <div class="signup-email">
              <input
                type="email"
                id="signup-email"
                placeholder="Email"
                class="email-input"
              />
              <svg class="email-icon" width="18" height="18">
                <use href="../img/symbol-defs.svg#icon-mail"></use>
              </svg>
            </div>
            <div class="signup-password">
              <input
                type="password"
                id="signup-password"
                placeholder="Password"
                class="password-input"
              />
              <svg class="password-icon" width="18" height="18">
                <use href="../img/symbol-defs.svg#icon-lock"></use>
              </svg>
            </div>
            <button type="submit" class="signup-btn">Sign Up</button>
          </form>
          <div class="sighup-links">
          <button type="button" class="signup-link">Sign up</button>
          <button type="button" class="sighin-link">Sign in</button>`}function A(){u.innerHTML=` <button type="button" class="close-form-btn">
      <svg class="close-form-icon" width="16" height="16">
        <use href="../img/symbol-defs.svg#icon-close-black"></use>
      </svg>
    </button>
    <form id="signup-form" class="signup-form">
      </div>
      <div class="signup-email">
        <input
          type="email"
          id="signup-email"
          placeholder="Email"
          class="email-input"
        />
        <svg class="email-icon" width="18" height="18">
          <use href="../img/symbol-defs.svg#icon-mail"></use>
        </svg>
      </div>
      <div class="signup-password">
        <input
          type="password"
          id="signup-password"
          placeholder="Password"
          class="password-input"
        />
        <svg class="password-icon" width="18" height="18">
          <use href="../img/symbol-defs.svg#icon-lock"></use>
        </svg>
      </div>
      <button type="submit" class="signup-btn">Sign Up</button>
    </form>
    <div class="sighup-links">
    <button type="button" class="signup-link">Sign up</button>
    <button type="button" class="sighin-link">Sign in</button>`}const T={apiKey:"AIzaSyA3hADlXiNs1sXdUxR8pbsxRLOErTEmqfU",authDomain:"authorisation-3967f.firebaseapp.com",projectId:"authorisation-3967f",storageBucket:"authorisation-3967f.appspot.com",messagingSenderId:"926560198246",appId:"1:926560198246:web:e18f20ad2d2adfa37e97a7"},q=k(T);v(q);function h(){return{supportUkraineCnt:document.querySelector(".support-list"),divEl:document.querySelector(".shopping__list"),paginationsSection:document.querySelector(".paginations"),paginationContainerPages:document.querySelector(".paginations__container-pages"),paginationContainerBackBtn:document.querySelector(".paginations__container-back"),paginationContainerEndBtn:document.querySelector(".paginations__container-end"),startButton:document.querySelector("button[name='startButton']"),previousButton:document.querySelector("button[name='previousButton']"),nextButton:document.querySelector("button[name='nextButton']"),endButton:document.querySelector("button[name='endButton']"),activButton:document.querySelector(".active"),allCategoriesBtn:document.querySelector("button[name=allcategories]"),categoryListEl:document.querySelector(".categories_list"),categoriesListContainer:document.querySelector(".categories"),categoryContainerEl:document.querySelector(".content-rendering-container")}}const{categoriesListContainer:O}=h();O.addEventListener("click",U);function U(t){if(t.preventDefault(),t.target.nodeName!=="BUTTON")return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category"),e.classList.add("active-category")}const{categoryListEl:M}=h();async function R(){try{const{data:t}=await g.get("https://books-backend.p.goit.global/books/category-list");return t}catch(t){console.log(t)}}async function N(){try{const e=(await R()).sort((o,n)=>o.list_name.localeCompare(n.list_name));for(const o of e){const n=document.createElement("li"),s=document.createElement("button");s.setAttribute("type","button"),s.classList.add("category-btn"),s.textContent=`${o.list_name}`,s.setAttribute("data-id",o.list_name),M.appendChild(n),n.appendChild(s)}}catch(t){console.log(t)}}N();B();
//# sourceMappingURL=commonHelpers.js.map
