import { CONSTANTS } from './constants';
import { urlCreator } from './api-service';

const booksSection = document.querySelector('.main-page-books-section');

let bookShelfContainer = null;

//Just export this function to your code and call it
export async function markupPopularBooks() {
  return await urlCreator(CONSTANTS.POPULAR_BOOKS_ALL_CATEGORIES)
    .then(({ data }) => {
      //receiving the responce from api and marking the result
      booksSection.insertAdjacentHTML('beforeend', createBookShelf(data));
      bookShelfContainer = document.querySelector('.book-shelf-container');
      bookShelfContainer.insertAdjacentHTML('beforeend', fillBookShelf(data));
    })
    .catch(error => console.log(error));
}

// Calling api service to deliver popular books

function createBookShelf(array) {
  // function creates div wrapper with name of the books category
  return array
    .map(
      book => `<div class="book-shelf">
      <p class="book-shelf-category">${book.list_name}</p>
      <div class="book-shelf-container"></div>
    </div>`
    )
    .join('');
}
// this function fills previously created bookshelves
function fillBookShelf(array) {
  return array.map(book =>
    book.books
      .map(bookdata => {
        return `<div>
  <img src="${bookdata.book_image}" alt="" />
  <h2>${bookdata.title}</h2>
  <p>${bookdata.author}</p>
</div>`;
      })
      .join('')
  );
}

