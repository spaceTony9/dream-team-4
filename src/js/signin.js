const signinBtn = document.querySelector('.header-btn');
const sectionContainer = document.querySelector('.section-container');

const signUpFormContainer = document.querySelector('.sighup-container');
// signinBtn.addEventListener('click', (e)=> {

//     if (e.target == e.currentTarget) {

//         sectionContainer.classList.remove('is-hidden')

//      return `
//     <div class="section-container">
//       <div class="sighup-container">
//         <button type="button" class="close-form-btn">
//           <svg class="close-form-icon" width="16" height="16">
//             <use href="../img/symbol-defs.svg#icon-close-black"></use>
//           </svg>
//         </button>
//         <form id="signup-form" class="signup-form">
//           <div class="signup-name">
//             <input
//               type="text"
//               id="signup-name"
//               placeholder="Name"
//               class="name-input"
//             />
//           </div>
//           <div class="signup-email">
//             <input
//               type="email"
//               id="signup-email"
//               placeholder="Email"
//               class="email-input"
//             />
//             <svg class="email-icon" width="18" height="18">
//               <use href="../img/symbol-defs.svg#icon-mail"></use>
//             </svg>
//           </div>
//           <div class="signup-password">
//             <input
//               type="password"
//               id="signup-password"
//               placeholder="Password"
//               class="password-input"
//             />
//             <svg class="password-icon" width="18" height="18">
//               <use href="../img/symbol-defs.svg#icon-lock"></use>
//             </svg>
//           </div>
//           <button type="submit" class="signup-btn">Sign Up</button>
//         </form>
//         <div class="sighup-links">
//         <button type="button" class="signup-link">Sign up</button>
//         <button type="button" class="sighin-link">Sign in</button>
//         </div>
//       </div>
//     </div>

//     `;
//     }

// })

signinBtn.addEventListener('click', e => {
  sectionContainer.classList.remove('is-hidden');
  fillInSingUpForm();
});

signUpFormContainer.addEventListener('click', e => {
  const closeSighupBtn = document.querySelector('.close-form-btn');
  closeSighupBtn.addEventListener('click', () => {
    sectionContainer.classList.add('is-hidden');
  });
  if (e.target.getAttribute('class') === 'signin-link-unactive') {
    sectionContainer.classList.add('log-in-container');
    fillInSingInForm();
  } else if (e.target.getAttribute('class') === 'signup-link-unactive') {
    fillInSingUpForm();
  }
});

// signinBtn.addEventListener('click', e => {
//   sectionContainer.classList.remove('is-hidden');
//   fillInSingUpForm();
//   const closeSighupBtn = document.querySelector('.close-form-btn');
//
//   const signupLink = document.querySelector('.signup-link');
//   const signinLink = document.querySelector('.sighin-link');
//   signinLink.addEventListener('click', fillInSingInForm);
//   signupLink.addEventListener('click', fillInSingUpForm);
//   // return `
//   // <div class="section-container">
//   // <div class="sighup-container">
//   //   ${fillInSingUpForm()}
//   //   </div>
//   // </div>`;
// });

function fillInSingUpForm() {
  signUpFormContainer.innerHTML = `
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
                <use href="./img/symbol-defs.svg#icon-mail"></use>
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
                <use href="./img/symbol-defs.svg#icon-lock"></use>
              </svg>
            </div>
            <button type="submit" class="signup-btn">Sign Up</button>
          </form>
          <div class="sighup-links">
          <button type="button" class="signup-link-active">Sign up</button>
          <button type="button" class="signin-link-unactive">Sign in</button>`;
}
function fillInSingInForm() {
  signUpFormContainer.innerHTML = ` <button type="button" class="close-form-btn">
      <svg class="close-form-icon" width="16" height="16">
        <use href="./img/symbol-defs.svg#icon-close-black"></use>
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
          <use href="./img/symbol-defs.svg#icon-mail"></use>
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
          <use href="./img/symbol-defs.svg#icon-lock"></use>
        </svg>
      </div>
      <button type="submit" class="signup-btn">Sign IN</button>
    </form>
    <div class="sighup-links">
    <button type="button" class="signup-link-unactive">Sign up</button>
    <button type="button" class="signin-link-active">Sign in</button>`;
}

function signupTemplate() {
  return `
    <div class="sighup-container">
    <button type="button" class="close-form-btn">
      <svg class="close-form-icon" width="16" height="16">
        <use href="./img/symbol-defs.svg#icon-close-black"></use>
      </svg>
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
          <use href="./img/symbol-defs.svg#icon-mail"></use>
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
          <use href="./img/symbol-defs.svg#icon-lock"></use>
        </svg>
      </div>
      <button type="submit" class="signup-btn">Sign Up</button>
    </form>
    <div class="sighup-links">
    <button type="button" class="signup-link-active">Sign up</button>
    <button type="button" class="signin-link-unactive">Sign in</button>
    </div>
  </div>`;
}

// function signinTemplate() {
//   return `

//   <div class="sighup-container">
//   <button type="button" class="close-form-btn">
//   <svg class="close-form-icon" width="16" height="16">
//     <use href="../img/symbol-defs.svg#icon-close-black"></use>
//   </svg>
// </button>
//     <form id="signup-form" class="signup-form">
//       <div class="signup-email">
//         <input
//           type="email"
//           id="signup-email"
//           placeholder="Email"
//           class="email-input"
//         />
//         <svg class="email-icon" width="18" height="18">
//           <use href="../img/symbol-defs.svg#icon-mail"></use>
//         </svg>
//       </div>
//       <div class="signup-password">
//         <input
//           type="password"
//           id="signup-password"
//           placeholder="Password"
//           class="password-input"
//         />
//         <svg class="password-icon" width="18" height="18">
//           <use href="../img/symbol-defs.svg#icon-lock"></use>
//         </svg>
//       </div>
//       <button type="submit" class="signup-btn">Sign Up</button>
//     </form>
//     <div class="sighup-links">
//     <button type="button" class="signup-link">Sign up</button>
//     <button type="button" class="sighin-link">Sign in</button>
//     </div>
//   </div>

//     `;
// }

