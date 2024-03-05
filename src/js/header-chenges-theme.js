import axios from 'axios';

(function (window, document, undefined) {
  let darkMode = localStorage.getItem('my_darkMode');
  if (darkMode) {
    document.documentElement.className += ' darkmode';
  }
})(window, document);

(function (window, document, undefined) {
  let switcherMode = document.querySelector('#checkbox');

  switcherMode.addEventListener(
    'change',
    function (event) {
      event.preventDefault();
      document.documentElement.classList.toggle('darkmode');
      if (document.documentElement.classList.contains('darkmode')) {
        localStorage.setItem('my_darkMode', true);
        return;
      }
      localStorage.removeItem('my_darkMode');
    },
    false
  );
})(window, document);

// const checkBox = document.querySelector('#checkbox');
// const body = document.querySelector('body');
// const header = document.querySelector('.container-header');
// const title = document.querySelector('.header-title');
// const shoppingSvg = document.querySelector('.shopping-svg-icon');
// const headerSsvg = document.querySelector('.header-svg');
// const burgerSvg = document.querySelector('.burger-svg');
// const headerTitleShop = document.querySelector('.header-title-shop');

// const themeKey = 'theme';
// const lightTheme = 'light-theme';
// const darkTheme = 'dark-theme';
// const getTheme = localStorage.getItem(themeKey);

// checkBox.addEventListener('click', () => {
//   if (checkBox.checked === false) {
//     body.classList.remove('dark');
//     header.classList.remove('dark');
//     title.classList.remove('header-title-dark');
//     shoppingSvg.classList.remove('dark-svg');
//     headerSsvg.classList.remove('dark-svg');
//     burgerSvg.classList.remove('dark-svg');
//     headerTitleShop.classList.remove('header-title-dark');
//   }
//   if (checkBox.checked === true) {
//     localStorage.setItem(themeKey, darkTheme);
//     body.classList.add('dark');
//     header.classList.add('dark');
//     title.classList.add('header-title-dark');
//     shoppingSvg.classList.add('dark-svg');
//     headerSsvg.classList.add('dark-svg');
//     burgerSvg.classList.add('dark-svg');
//     headerTitleShop.classList.add('header-title-dark');
//   }
// });
