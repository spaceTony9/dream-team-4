import { CONSTANTS } from './constants';
import { urlCreator } from './api-service';

const booksSection = document.querySelector('.main-page-books-section');
const bookShelfContainer = document.querySelector('.book-shelf-container');

urlCreator(CONSTANTS.POPULAR_BOOKS_ALL_CATEGORIES)
  .then(({ data }) => {
    console.log(data);
    // console.log(data);
    booksSection.insertAdjacentHTML('beforeend', createBookShelf(data));
    // bookShelfContainer.insertAdjacentHTML('beforeend', fillBookShelf(array))
  })
  .catch(error => console.log(error));

function createBookShelf(array) {
  return array
    .map(
      book => `<div class="book-shelf">
      <p class="book-shelf-category">${book.list_name}</p>
      <div class="book-shelf-container"></div>
    </div>`
    )
    .join('');
}

function fillBookShelf(array) {
  return array.map(
    book => `
        <div>
          <img src="${book.book_image}" alt="" />
          <h2>${book.title}</h2>
          <p>${book.author}</p>
        </div>`
  );
}
