// import { CONSTANTS } from '../constants';
// import { urlCreator } from '../api-service';

// const booksSection = document.querySelector('.main-page-books-section');
// const categoriesContainer = document.querySelector('.categories');

// // Оголошуємо функцію для отримання та відображення книг за обраною категорією
// async function markupPopularBooks(categoryId) {
//   try {
//     // Отримуємо дані про популярні книги за категорією з API
//     const data = await urlCreator(categoryId);

//     // Очищаємо секцію з книгами перед відображенням нових книг
//     booksSection.innerHTML = '';

//     // Відображаємо отримані книги у секції з книгами
//     booksSection.innerHTML = createBookShelf(data);
//   } catch (error) {
//     console.error('Error fetching books:', error);
//   }
// }

// // Додаємо обробник подій для контейнера категорій
// categoriesContainer.addEventListener('click', async event => {
//   if (event.target.classList.contains('category-btn')) {
//     const categoryId = event.target.getAttribute('data-id');
//     await markupPopularBooks(categoryId);
//   }
// });

// // Функція для створення розмітки книжкових полиць за категоріями
// function createBookShelf(array) {
//   let markup = '';
//   array.forEach((category, index) => {
//     const isFirstFour = index < 4 ? '' : 'not-marked';
//     markup += `
//             <div class="book-shelf ${isFirstFour}">
//                 <p class="book-shelf-category">${category.name}</p>
//                 <div class="book-shelf-container"></div>
//                 <button class="see-more-btn" type="button" data-category="${category.id}">SEE MORE</button>
//             </div>
//         `;
//   });
//   return markup;
// }
