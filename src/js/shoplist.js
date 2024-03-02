import axios from "axios";
import iziToast from "izitoast";

// запит на бєкенд для отримання книги за id для модалки



export default async function getBookDetails(_id) {
    const BASE_URL = "https://books-backend.p.goit.global";
    const END_POINT = '/books/';
    

    const params = {
        id:_id,
    };


const url = `${BASE_URL}${END_POINT}?${new URLSearchParams(params)}`;
  const response = await axios.get(url);
 return response.data
    };

// запит на бєкенд для отримання книги за id для модалки

// Рендеримо дані про книгу у модальному вікні
function renderBookDetails(bookData) {
  // Отримуємо елемент, в який будемо вставляти дані про книгу
  const bookDetailsContainer = document.getElementById('bookDetails');

  // Створюємо HTML для відображення детальної інформації про книгу
  const bookTemplate = `
    <img src="${bookData.book_image}" alt="Book Cover">
    <h2>${bookData.title}</h2>
    <p>${bookData.author}</p>
<p>${bookData.description}</p>
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
    
};



// Отримуємо елементи DOM
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');
const addToShoppingListBtn = document.getElementById('addToShoppingList');
const removeFromShoppingListBtn = document.getElementById('removeFromShoppingList');

// Функція відкриття модального вікна
export function openModal() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Забороняємо прокрутку фонового контенту
}

// Функція закриття модального вікна
function closeModalFunc() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Дозволяємо прокрутку фонового контенту
}

// Обробник події кліку по кнопці закриття
closeModal.addEventListener('click', closeModalFunc);

// Обробник події кліку по backdrop модального вікна
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

// Обробник події натискання на клавішу ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModalFunc();
  }
});

// Функція для додавання книги до Shopping list у localStorage
function addToShoppingList(bookId, bookDetails) {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || {};
  shoppingList[bookId] = bookDetails; // Додаємо дані про книгу до списку покупок
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

 // Змінюємо текст кнопки на "Remove from Shopping List"
  addToShoppingListBtn.textContent = 'Remove from Shopping List';
}

// Функція для видалення книги з Shopping list у localStorage
function removeFromShoppingList(bookId) {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || {};
  delete shoppingList[bookId]; // Видаляємо дані про книгу зі списку покупок
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// Обробник події кліку по кнопці "Add to Shopping List"
addToShoppingListBtn.addEventListener('click', async () => {
  const bookId = _id;
  const bookDetails = await getBookDetails(bookId);
  if (bookDetails) {
    addToShoppingList(bookId, bookDetails);
    // Оновлення інтерфейсу користувача
  }
});

