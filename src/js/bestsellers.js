import { APIService } from './APIservice';
import { highlightCategory } from './book-categories';

const api = new APIService();
const bookGallery = document.querySelector('.books-gallery');

async function getBestSellers() {
  try {
    const response = await api.fetchBestSellersBooks();
    const bestSellers = await response.data;
    return bestSellers;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch best sellers');
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
  try {
    const topBooks = await getBestSellers();
    let bookCategories = '<ul class="top-books rendering-gap js-list-rendering">';
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
    console.error(error);
    throw new Error('Failed to render categories');
  }
}

if (bookGallery) {
  renderCategories().catch(error => console.error(error));
}

async function onSeeMoreBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const target = e.target;
  if (target.matches('button[data-category]')) {
    const category = target.dataset.category;
    const titleCollection = bookGallery.querySelector('.collection-title')
    titleCollection.innerHTML = `${removeLastWord(category)} <span>${LastWord(category)}</span>`;
    highlightCategory(category);
    await createBooksOnSeeMoreBtn(category);
  }
}

function removeLastWord(category) {
  let words = category.split(' ');
  words.pop();
  let result = words.join(' ');
  return result;
}

function LastWord(category) {
    var words = category.trim().split(" "); //Splitting sentence into words
    return words[words.length - 1]; //Returning the last word
}

async function createBooksOnSeeMoreBtn(category) {
  try {
    const res = await api.fetchBooksByCategory(category);
    const books = await res.data;
    function collectionMarkup() {
      return `
        <ul class="top-books rendering-gap js-list-rendering">
          ${books.map(({ title, book_image, author, _id }) => {
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
          }).join('')}
        </ul>`;
    }
    const bookCollection = bookGallery.querySelector(".books-collection");
    bookCollection.innerHTML = collectionMarkup();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create books');
  }
}
