import axios from 'axios';

const checkBox = document.querySelector('#checkbox');
const body = document.querySelector('body');
const header = document.querySelector('.container-header-dark');

const themeKey = 'theme';
const lightTheme = 'light-theme';
const darkTheme = 'dark-theme';
const getTheme = localStorage.getItem(themeKey);

checkBox.addEventListener('click', () => {
  if (checkBox.checked === false) {
    body.classList.remove('dark');
    header.classList.remove('dark');
  }
  if (checkBox.checked === true) {
    localStorage.setItem(themeKey, darkTheme);
    body.classList.add('dark');
  }
});
