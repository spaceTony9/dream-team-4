import axios from 'axios';

export class APIService {
  #BASE_URL = 'https://books-backend.p.goit.global/';

  constructor(selectedCategory, bookId) {
    this.selectedCategory = selectedCategory;
    this.bookId = bookId;
  }

  // запит на категорії книг
  fetchBooksCategoryList() {
    return axios.get(`${this.#BASE_URL}books/category-list`);
  }

  // запит на популярні книги(BestSellersBooks)
  fetchBestSellersBooks() {
    return axios.get(`${this.#BASE_URL}books/top-books`);
  }

  // запит на книги по категорії, приймає обрану категорію книги
  fetchBooksByCategory(selectedCategory) {
    return axios.get(
      `${this.#BASE_URL}books/category?category=${selectedCategory}`
    );
  }

  // запит на інформацію про книгу, приймає Іd книги
  fetchBookInfo(bookId) {
    return axios.get(`${this.#BASE_URL}books/${bookId}`);
  }
  
}
