import"./assets/header-chenges-theme-e55f3390.js";import{a as u,i as y,b as k,g as v}from"./assets/vendor-85b191d9.js";const d={MAIN_URl:"https://books-backend.p.goit.global/books/",CATEGORY_LIST_URL:"https://books-backend.p.goit.global/books/category-list",POPULAR_BOOKS_ALL_CATEGORIES:"https://books-backend.p.goit.global/books/top-books",SELECTED_CATEGORY:"https://books-backend.p.goit.global/books/category"};async function g(t,e){return await u.get(t,{params:{category:e}})}function S(){return y.show({message:"We were not able to fetch your data. Try again!",messageColor:"white",backgroundColor:"#EF4040",position:"topRight"})}const a=document.querySelector(".main-page-books-section");document.querySelector(".best-sellers-books-section");const E=document.querySelector(".best-sellers-header"),C=document.querySelector(".categories");let l=null;async function p(){return await g(d.POPULAR_BOOKS_ALL_CATEGORIES).then(({data:t})=>{if(t.length)return E.innerHTML="Best Sellers <span>Books</span>",a.innerHTML=L(t),l=document.querySelectorAll(".book-shelf-container"),l.forEach((e,o)=>{const n=t[o];return e.innerHTML=B([n]),t}),markupBooksAf,terSeeMoreBtn(),t;S()}).catch(t=>console.log(t))}function L(t){return t.map(e=>`<div class="book-shelf">
      <p class="book-shelf-category">${e.list_name}</p>
      <div class="book-shelf-container"></div>
      <button class="see-more-btn" type="button" data-category="${e.list_name}">SEE MORE</button>
    </div>`).join("")}function w(){return C.addEventListener("click",t=>{t.target.nodeName==="BUTTON"&&t.target.hasAttribute("data-id")?g(d.SELECTED_CATEGORY,t.target.getAttribute("data-id")).then(({data:e})=>{t.stopPropagation(),a.innerHTML="",a.classList.add("book-grid"),a.innerHTML=_(e)}).catch(e=>console.error(e)):t.target.nodeName==="BUTTON"&&t.target.hasAttribute("name")&&p()})}function B(t){return t.map((e,o)=>e.books.map((n,s)=>{let i;window.innerWidth<768?i=1:window.innerWidth<1440?i=3:i=5;const h=window.innerWidth<768&&s===0,f=s<i;return`<div class="book-card-container${h?" marked":""}" style="display: ${f?"block":"none"};"><a class="book-item-link" href="#" data-bookid="${n._id}">
            <img class="book-card-img" src="${n.book_image}" alt="" />
            <h2 class="book-card-title">${n.title}</h2>
            <p class="book-card-author">${n.author}</p>
              </div>`}).join(""))}function _(t){const e=document.querySelector(".best-sellers-header");console.log(t),e.textContent=t[0].list_name;const o=e.textContent.split(" "),n=o.pop();return e.innerHTML=o.join(" ")+' <span style="color: #4f2ee8;">'+n+"</span>",t.map(s=>`<div class="book-card-container" ><a class="book-item-link" href="#" data-bookid="${s._id}">
            <img class="book-card-img" src="${s.book_image}" alt="" />
            <h2 class="book-card-title">${s.title}</h2>
            <p class="book-card-author">${s.author}</p></div>`).join("")}p();const A=document.querySelector(".header-btn"),r=document.querySelector(".section-container"),c=document.querySelector(".sighup-container");A.addEventListener("click",t=>{r.classList.remove("is-hidden"),m()});c.addEventListener("click",t=>{document.querySelector(".close-form-btn").addEventListener("click",()=>{r.classList.add("is-hidden")}),t.target.getAttribute("class")==="signin-link-unactive"?(r.classList.add("log-in-container"),q()):t.target.getAttribute("class")==="signup-link-unactive"&&m()});function m(){c.innerHTML=`
  <button type="button" class="close-form-btn ">
  <span><svg class="close-form-icon " width="16" height="16">
  <use href="../img/symbol-defs.svg#icon-close-black"></use></svg></span>
  
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
          <button type="button" class="signup-link-active">Sign up</button>
          <button type="button" class="signin-link-unactive">Sign in</button>`}function q(){c.innerHTML=` <button type="button" class="close-form-btn">
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
      <button type="submit" class="signup-btn">Sign IN</button>
    </form>
    <div class="sighup-links">
    <button type="button" class="signup-link-unactive">Sign up</button>
    <button type="button" class="signin-link-active">Sign in</button>`}const T={apiKey:"AIzaSyA3hADlXiNs1sXdUxR8pbsxRLOErTEmqfU",authDomain:"authorisation-3967f.firebaseapp.com",projectId:"authorisation-3967f",storageBucket:"authorisation-3967f.appspot.com",messagingSenderId:"926560198246",appId:"1:926560198246:web:e18f20ad2d2adfa37e97a7"},O=k(T);v(O);function b(){return{supportUkraineCnt:document.querySelector(".support-list"),divEl:document.querySelector(".shopping__list"),paginationsSection:document.querySelector(".paginations"),paginationContainerPages:document.querySelector(".paginations__container-pages"),paginationContainerBackBtn:document.querySelector(".paginations__container-back"),paginationContainerEndBtn:document.querySelector(".paginations__container-end"),startButton:document.querySelector("button[name='startButton']"),previousButton:document.querySelector("button[name='previousButton']"),nextButton:document.querySelector("button[name='nextButton']"),endButton:document.querySelector("button[name='endButton']"),activButton:document.querySelector(".active"),allCategoriesBtn:document.querySelector("button[name=allcategories]"),categoryListEl:document.querySelector(".categories_list"),categoriesListContainer:document.querySelector(".categories"),categoryContainerEl:document.querySelector(".content-rendering-container")}}const{categoriesListContainer:U}=b();U.addEventListener("click",R);function R(t){if(t.preventDefault(),t.target.nodeName!=="BUTTON")return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category"),e.classList.add("active-category")}const{categoryListEl:$}=b();async function I(){try{const{data:t}=await u.get("https://books-backend.p.goit.global/books/category-list");return t}catch(t){console.log(t)}}async function M(){try{const e=(await I()).sort((o,n)=>o.list_name.localeCompare(n.list_name));for(const o of e){const n=document.createElement("li"),s=document.createElement("button");s.setAttribute("type","button"),s.classList.add("category-btn"),s.textContent=`${o.list_name}`,s.setAttribute("data-id",o.list_name),$.appendChild(n),n.appendChild(s)}}catch(t){console.log(t)}}M();w();
//# sourceMappingURL=commonHelpers.js.map
