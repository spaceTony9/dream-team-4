import charities from './charities';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const list = document.querySelector('.support-list');
const html = charities.map(makeMarkup).join('');
const button = document.querySelector('.swiper-next');
const buttonIcon = button.querySelector('.icon-down');
let clickCount = 0;

function makeMarkup({ url, title, img }, index) {
  const digits = (index + 1).toString().padStart(2, '0');

  return `
  <li class="swiper-slide">
        <div class="support-item">
        <span class="support-index">${digits}</span>
        <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${img.normal} 1x, ${img.retina} 2x"
                src="${img.normal}" type="image/png" alt="${title}">
        </a>
    </li>`;
}

list.innerHTML = html;

const str = charities.map((element, index) => {
  return '<li class="support-item"> посиланнячко на фонду <a class="support-link" href=""></a></li>';
});

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 4,
  rewind: true,
  spaceBetween: 20,
  effect: 'slide',
  breakpoints: {
    480: {
      slidesPerView: 5.9999,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-next',
  },
});
button.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 3) {
    buttonIcon.classList.add('rotateSvg');
  } else if (clickCount === 4) {
    buttonIcon.classList.remove('rotateSvg');
    clickCount = 0; // Скидаємо лічильник, щоб почати знову
  }
});
