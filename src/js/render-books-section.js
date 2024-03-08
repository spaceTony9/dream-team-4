import { CONSTANTS } from './constants';
import { urlCreator } from './api-service';
import { notificationError } from './categories-menu/notifications';
const booksSection = document.querySelector('.main-page-books-section');
const bestBooksSection = document.querySelector('.best-sellers-books-section');
const mainPageHeader = document.querySelector('.best-sellers-header');
const categoriesContainer = document.querySelector('.categories');

let bookShelfContainer = null;

//Just export this function to your code and call it
export async function markupPopularBooks() {
  return await urlCreator(CONSTANTS.POPULAR_BOOKS_ALL_CATEGORIES) // Calling api service to deliver popular books
    .then(({ data }) => {
      if (data.length) {
        mainPageHeader.innerHTML = 'Best Sellers <span>Books</span>';
        booksSection.innerHTML = createBookShelf(data);
        bookShelfContainer = document.querySelectorAll('.book-shelf-container');
        bookShelfContainer.forEach((container, index) => {
          const categoryData = data[index]; // Get the data for the current category
          container.innerHTML = fillBookShelf([categoryData]);

          return data;
        });
        markupBooksAfterSeeMoreBtn();
        return data;
      } else {
        notificationError();
      }
    })
    .catch(error => console.log(error));
}

function createBookShelf(array) {
  // function creates div wrapper with name of the books category
  return array
    .map(
      book => `<div class="book-shelf">
      <p class="book-shelf-category">${book.list_name}</p>
      <div class="book-shelf-container"></div>
      <button class="see-more-btn" type="button" data-category="${book.list_name}">SEE MORE</button>
    </div>`
    )
    .join('');
}
// this function fills previously created bookshelves

export function markupBooksAfterSeeMoreBtn() {
  return booksSection.addEventListener('click', e => {
    if (
      e.target.nodeName === 'BUTTON' &&
      e.target.hasAttribute('data-category')
    ) {
      urlCreator(
        CONSTANTS.SELECTED_CATEGORY,
        e.target.getAttribute('data-category')
      )
        .then(({ data }) => {
          if (data.length) {
            e.stopPropagation();
            booksSection.innerHTML = '';
            booksSection.classList.add('book-grid');
            booksSection.innerHTML = markupSelectedCategory(data);
          } else {
            notificationError()
          }
        })
        .catch(error => console.error(error));
    }
  });
}

export function markupCategories() {
  return categoriesContainer.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON' && e.target.hasAttribute('data-id')) {
      urlCreator(CONSTANTS.SELECTED_CATEGORY, e.target.getAttribute('data-id'))
        .then(({ data }) => {
          e.stopPropagation();
          booksSection.innerHTML = '';
          booksSection.classList.add('book-grid');
          booksSection.innerHTML = markupSelectedCategory(data);
        })
        .catch(error => console.error(error));
    } else if (
      e.target.nodeName === 'BUTTON' &&
      e.target.hasAttribute('name')
    ) {
      markupPopularBooks();
    }
  });
}

function fillBookShelf(array) {
  return array.map((book, index) => {
    return book.books
      .map((bookdata, innerIndex) => {
        let numElements;
        if (window.innerWidth < 768) {
          numElements = 1; // For less than 768px, show only 1 element
        } else if (window.innerWidth < 1440) {
          numElements = 3; // For less than 1440px, show 3 elements
        } else {
          numElements = 5; // For more than 1440px, show 5 elements
        }

        const isMarked = window.innerWidth < 768 && innerIndex === 0; // Mark the first item for less than 768px

        const isDisplayed = innerIndex < numElements; // Display only required number of elements based on screen width

        return `<div class="book-card-container${
          isMarked ? ' marked' : ''
        }" style="display: ${
          isDisplayed ? 'block' : 'none'
        };"><a class="book-item-link" href="#" data-bookid="${bookdata._id}">
            <img class="book-card-img" src="${bookdata.book_image}" alt="" />
            <h2 class="book-card-title">${bookdata.title}</h2>
            <p class="book-card-author">${bookdata.author}</p>
              </div>`;
      })
      .join('');
  });
}

function markupSelectedCategory(array) {
  const bookCategoryHeader = document.querySelector('.best-sellers-header');
  bookCategoryHeader.textContent = array[0].list_name; // Set category name once, assuming all books belong to the same category

  // Split the category name into words
  const words = bookCategoryHeader.textContent.split(' ');

  // Get the last word
  const lastWord = words.pop();

  // Join the words back together with a span around the last word
  bookCategoryHeader.innerHTML =
    words.join(' ') + ' <span style="color: #4f2ee8;">' + lastWord + '</span>';

  return array
    .map(bookdata => {
      return `<div class="book-card-container" ><a class="book-item-link" href="#" data-bookid="${bookdata._id}">
            <img class="book-card-img" src="${bookdata.book_image}" alt="" />
            <h2 class="book-card-title">${bookdata.title}</h2>
            <p class="book-card-author">${bookdata.author}</p></div>`;
    })
    .join('');
}

// function fillBookShelf(array) {
//   return array.map(book =>
//     book.books
//       .map(bookdata => {
//         return `<div class="book-card-container ">
//     <a class="book-item-link" href="#" data-bookid="${bookdata._id}">
//   <img class="book-card-img" src="${bookdata.book_image}" alt="" />
//   <h2 class="book-card-title">${bookdata.title}</h2>
//   <p class="book-card-author">${bookdata.author}</p>
// </div>`;
//       })
//       .join('')
//   );
// }
markupPopularBooks();

// function afterSeeMoreBtnPressed(array) {
//   return array
//     .map(
//       book => `<div class="book-card-container"><img class="book-card-img" src="${bookdata.book_image}" alt="" />
//                 <h2 class="book-card-title">${bookdata.title}</h2>
//                 <p class="book-card-author">${bookdata.author}</p></div>`
//     )
//     .join('');
// }
