import { CONSTANTS } from './constants';
import { urlCreator } from './api-service';

const booksSection = document.querySelector('.main-page-books-section');

let bookShelfContainer = null;

//Just export this function to your code and call it
export async function markupPopularBooks() {
  return await urlCreator(CONSTANTS.POPULAR_BOOKS_ALL_CATEGORIES)
    .then(({ data }) => {
      console.log(data);
      //receiving the responce from api and marking the result
      booksSection.innerHTML = createBookShelf(data);
      bookShelfContainer = document.querySelectorAll('.book-shelf-container');
      bookShelfContainer.forEach((container, index) => {
        const categoryData = data[index]; // Get the data for the current category
        container.innerHTML = fillBookShelf([categoryData]);
      });
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
        return `<div class="book-card-container ">
    <a class="book-item-link" href="#" data-bookid="${bookdata._id}">
  <img class="book-card-img" src="${bookdata.book_image}" alt="" />
  <h2 class="book-card-title">${bookdata.title}</h2>
  <p class="book-card-author">${bookdata.author}</p>
</div>`;
      })
      .join('')
  );
}

markupPopularBooks()