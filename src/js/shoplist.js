import amazon1x from '../img/amazon-1x-min.png';
import amazon2x from '../img/amazon-2x-min.png';
import openbook1x from '../img/openbook-1x-min.png';
import openbook2x from '../img/openbook-2x-min.png';
import bookshop1x from '../img/bookshop-1x-min.png';
import bookshop2x from '../img/bookshop-2x-min.png';
import btnSvg from '../img/sprite.svg';
// import getRefs from './refs.js';

const amazonLink = document.querySelector('.amazon-link');
const bookshopLink = document.querySelector('.bookshop-link');
const applebooksLink = document.querySelector('.applebooks-link');

document.addEventListener('DOMContentLoaded', () => {
  const amazonLink = document.querySelector('.amazon-link');
  const bookshopLink = document.querySelector('.bookshop-link');
  const applebooksLink = document.querySelector('.applebooks-link');
  const startButton = document.querySelector('[name="startButton"]');
  const previousButton = document.querySelector('[name="previousButton"]');
  const nextButton = document.querySelector('[name="nextButton"]');
  const endButton = document.querySelector('[name="endButton"]');

  const itemsPerPage = 3; // Кількість елементів на сторінці

  function getSavedBooks() {
    const savedBooks = localStorage.getItem('bookShopingListLS');
    if (savedBooks) {
      return JSON.parse(savedBooks);
    }
    return [];
  }

  function generateBookCard(book) {
    const {
      book_image,
      title,
      list_name,
      description,
      author,
      buy_links,
      _id,
    } = book;
    return `<div class="book-card">
      <img class="book-card-image" src="${book_image}" alt="${title}" />
      <div class="book-card-info">
        <div class="book-card-hero">
          <div class="book-card-title+cat">
            <h3 class="book-card-title">${title}</h3>
            <p class="book-card-category">${list_name}</p>
          </div>
          <button class="book-card-remove" data-bookid="${_id}">
           <svg class="book-card-remove-icon" width="28" height="28" data-bookid="${_id}">
            <use data-name="book-card-remove" href="${btnSvg}#icon-trash-shop"></use>
          </svg>
          </button>
        </div>
        <p class="book-card-description">${description}</p>
        <div class="book-card-footer">
          <p class="book-card-author">Author: ${author}</p>
          <div class="book-card-links">
            <a class="amazon-link" target="_blank" href="${
              buy_links.find(buyLink => buyLink.name === 'Amazon').url
            }">
                  <img
                    class="change-color fix-amazon add-hover"
                    srcset="
                      ${amazon1x} 1x,
                      ${amazon2x} 2x
                    "
                    src="${amazon1x}"
                    alt="Amazon Logo"
                  />
                </a>
                <a class="applebooks-link" target="_blank" href="${
                  buy_links.find(buyLink => buyLink.name === 'Apple Books').url
                }">
                  <img
                    class="change-color"
                    srcset="
                      ${openbook1x} 1x,
                      ${openbook2x} 2x
                    "
                    src="${openbook1x}"
                    alt="Openbook Logo"
                  />
                </a>
                <a class="bookshop-link" target="_blank" href="${
                  buy_links.find(buyLink => buyLink.name === 'Bookshop').url
                }">
                  <img
                    class="change-color"
                    srcset="
                      ${bookshop1x} 1x,
                      ${bookshop2x} 2x
                    "
                    src="${bookshop1x}"
                    alt="Bookshop Logo"
                  />
                </a>     
          </div>
        </div>
      </div>
    </div>`;
  }

  function renderBooks(page = 1) {
    const savedBooks = getSavedBooks();
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedBooks = savedBooks.slice(startIndex, endIndex);

    const booksContainer = document.querySelector('.js-books.shop');
    const emptyListImg = document.querySelector('.empty-shopping-list-div');
    const paginationSection = document.querySelector('.paginations');

    if (savedBooks.length === 0) {
      emptyListImg.style.display = 'block';
      booksContainer.innerHTML = '';
      paginationSection.style.display = 'none'; //приховую секцію з пагінацією
    } else {
      const booksMarkup = paginatedBooks
        .map(book => generateBookCard(book))
        .join('');
      if (booksContainer) {
        booksContainer.innerHTML = booksMarkup;
      }
      if (emptyListImg) {
        emptyListImg.style.display = 'none';
      }
      if (savedBooks.length <= itemsPerPage) {
        paginationSection.style.display = 'none';
      } else {
        paginationSection.style.display = 'flex';
      }
    }

    renderPagination(savedBooks.length, page);
  }

  function renderPagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.querySelector(
      '.paginations__container-pages'
    );

    if (totalPages <= 1 || totalItems <= itemsPerPage) {
      paginationContainer.innerHTML = '';
      return;
    }

    let paginationHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      paginationHtml += `<button class="paginations__btn paginations__btn--pages ${
        i === currentPage ? 'active' : ''
      }" data-page="${i}">${i}</button>`;
    }

    paginationContainer.innerHTML = paginationHtml;

    const paginationButtons = document.querySelectorAll(
      '.paginations__btn--pages'
    );
    paginationButtons.forEach(button => {
      button.addEventListener('click', () => {
        const page = parseInt(button.dataset.page);
        renderBooks(page);
      });
    });
  }

  function handleRemoveBook(event) {
    if (
      event.target.classList.contains('book-card-remove') ||
      event.target.classList.contains('book-card-remove-icon') ||
      event.target.dataset.name === 'book-card-remove'
    ) {
      const bookId = event.target.getAttribute('data-bookid');
      removeBookFromList(bookId);
    }
  }

  function removeBookFromList(bookId) {
    const savedBooks = getSavedBooks();
    const updatedBooks = savedBooks.filter(book => book._id !== bookId);
    localStorage.setItem('bookShopingListLS', JSON.stringify(updatedBooks));
    renderBooks();
  }

  document.addEventListener('click', handleRemoveBook);

  startButton.addEventListener('click', () => renderBooks(1));

  previousButton.addEventListener('click', () => {
    const currentPage = parseInt(
      document.querySelector('.paginations__btn--pages.active').innerText
    );
    const previousPage = currentPage > 1 ? currentPage - 1 : 1;
    renderBooks(previousPage);
  });

  nextButton.addEventListener('click', () => {
    const currentPage = parseInt(
      document.querySelector('.paginations__btn--pages.active').innerText
    );
    const totalPages = document.querySelectorAll(
      '.paginations__btn--pages'
    ).length;
    const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
    renderBooks(nextPage);
  });

  endButton.addEventListener('click', () => {
    const totalPages = document.querySelectorAll(
      '.paginations__btn--pages'
    ).length;
    renderBooks(totalPages);
  });

  renderBooks();
});
