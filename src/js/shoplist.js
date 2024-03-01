import axios from "axios";
import iziToast from "izitoast";

// запит на бєкенд для отримання книги за id для модалки
const apiUrl = `https://books-backend.p.goit.global/books/${id}`;

axios.get(apiUrl)
  .then(response => {
    // Отримано відповідь з даними про книгу
    const bookData = response.data;
    // Рендеримо дані про книгу у модальному вікні
    renderBookDetails(bookData);
  })
  .catch(error => {
   showError(error);
  });

// Рендеримо дані про книгу у модальному вікні
function renderBookDetails(bookData) {
  // Отримуємо елемент, в який будемо вставляти дані про книгу
  const bookDetailsContainer = document.getElementById('bookDetails');

  // Створюємо HTML для відображення детальної інформації про книгу
  const bookTemplate = `
    <img src="${bookData.book_image}" alt="Book Cover">
    <h2>${bookData.title}</h2>
    <p>${bookData.author}</p>
<p>DESCRIPTION</p>
       <ul>
      ${bookData.buy_links.map(buy_link => `<li><a href="${buy_link.url}">${buy_link.name}</a></li>`).join('')}
    </ul>
  `;

  // Вставляємо HTML з даними про книгу в контейнер
  bookDetailsContainer.innerHTML = bookTemplate;
};

    
function showError(msg) { iziToast.error({
                    title: 'Error',
                    message: msg,
                    position: 'topCenter'
                });
    
}