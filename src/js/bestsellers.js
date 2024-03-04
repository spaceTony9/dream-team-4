import { APIService } from './APIservice';
import { highlightCategory } from './book-categories';

const api = new APIService();
const bookGallery = document.querySelector('.books-gallery');

async function getBestSellers() {
  try {
    // Show loading indicator
    showLoadingIndicator();
    
    const response = await api.fetchBestSellersBooks();
    
    // Hide loading indicator
    hideLoadingIndicator();
    
    const bestSellers = await response.data;
    return bestSellers;
  } catch (error) {
    console.log(error);
    
    // Hide loading indicator on failure
    hideLoadingIndicator();
    
    // Show failure notification
    reportsFailure('Sorry, no books were found. Please try again.');
  }
}

function createBookCategoryMarkup(category) {
  return `
    <li class="book-category-item">
      <p class="book-category">${category.list_name}</p>
      <ul class="top-books bestsel-books js-list-rendering">
        ${category.books
          .map(book => {
            return `
              <li class="book-card flex-element" data-id="${book._id}">
                <div class="book-thumb">
                  <img class="book-cover" src="${book.book_image}" alt="${book.title}"/>
                  <div class="quick-view">
                    <p class="quick-view-text">QUICK VIEW</p>
                  </div>
                </div>
                <div class="book-descr">
                  <h2 class="book-name">${book.title}</h2>
                  <h3 class="book-author">${book.author}</h3>
                </div>
              </li>
            `;
          })
          .join('')}
      </ul>
      <button class="book-card-btn" type="button" data-category="${category.list_name}">see more</button>
    </li>
  `;
}

export default async function renderCategories() {
  let bookCategories = '<ul class="top-books rendering-gap js-list-rendering">';
  try {
    const topBooks = await getBestSellers();
    for (let category of topBooks) {
      bookCategories += createBookCategoryMarkup(category);
    }
    bookCategories += '</ul>';
    bookGallery.innerHTML = `<h1 class="collection-title">Best Sellers <span>Books</span></h1>`;
    const bookCollection = document.createElement("div");
    bookCollection.className = "books-collection";
    bookCollection.innerHTML = bookCategories;
    bookCollection.addEventListener('click', onSeeMoreBtnClick);
    bookGallery.appendChild(bookCollection);
  } catch (error) {
    console.log(error);
  }
}

if (bookGallery) {
  try {
    renderCategories();
  } catch (error) {
    console.log(error);
  }
}

async function onSeeMoreBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const target = e.target;
  try {
    if (target.matches('button[data-category]')) {
      const category = target.dataset.category;

      const titleCollection = bookGallery.querySelector('.collection-title')
      titleCollection.innerHTML = `${removeLastWord(category)} <span>${LastWord(category)}</span>`;

      highlightCategory(category);
      await createBooksOnSeeMoreBtn(category);
    }
  } catch (error) {
    console.log(error);
  }
}

function removeLastWord(category) {
  let words = category.split(' ');
  words.pop();
  let result = words.join(' ');
  return result;
}

function LastWord(category) {
  var words = category.trim().split(" ");
  return words[words.length - 1];
}

async function createBooksOnSeeMoreBtn(category) {
  try {
    // Show loading indicator
    showLoadingIndicator();
    
    const res = await api.fetchBooksByCategory(category);
    const books = await res.data;
    
    // Hide loading indicator
    hideLoadingIndicator();
    
    function collectionMarkup() {
      return `
        <ul class="top-books rendering-gap js-list-rendering">
          ${books
            .map(({ title, book_image, author, _id }) => {
              return `
                <li class="book-card" data-id=${_id}>
                  <div class="book-thumb">
                    <img class="book-cover" src="${book_image}" alt="${title}">
                    <div class="quick-view">
                      <p class="quick-view-text">QUICK VIEW</p>
                    </div>
                  </div>
                  <div class="book-descr">
                    <h2 class="book-name">${title}</h2>
                    <h3 class="book-author">${author}</h3>
                  </div>
                </li>
              `;
            })
            .join('')}
        </ul>`;
    }
    const bookCollection = bookGallery.querySelector(".books-collection");
    bookCollection.innerHTML = collectionMarkup();
  } catch (error) {
    console.log(error);
    
    // Hide loading indicator on failure
    hideLoadingIndicator();
    
    // Show failure notification
    reportsFailure('Sorry, no books were found. Please try again.');
  }
}

// Custom loading indicator function
function showLoadingIndicator() {
  // Implement your loading indicator logic here
}

// Custom loading indicator hiding function
function hideLoadingIndicator() {
  // Implement hiding the loading indicator logic here
}

// Custom failure notification function
function reportsFailure(message) {
  // Implement your failure notification logic here
  alert(message); // As a simple example, using alert for showing error message
}