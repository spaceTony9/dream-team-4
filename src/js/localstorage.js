const shopListMessageContainer = document.querySelector('.shop-list-container-message');

// Ключ локального сховища
const STORAGE_KEY = 'storage-of-books';

// Отримання даних зі сховища
const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));

// ТРЕБА додати прослуховувача події на кнопку ADD TO SHOPPING LIST


// Отримуємо значення вибору користувача
function userCheck() {
    const userData = {}; // Прийшло значення вибору користувача
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userCheck)); // Додали до локального сховища обрану книгу
}

// Отримання даних з локального сховища
function getChoiceUser(e) {
    e.preventDefault();

    const userChoiceBook = JSON.parse(localStorage.getItem(STORAGE_KEY));
    //Викликати функцію рендеру картки книжки
    shopListMessageContainer.classList.add('is-hidden');

}

//Прослуховувач події на кнопку "корзинка" для видалення книги
// Функція видалення книжки із шопінг листа
function removeBook(e) {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);// Необхідно додати ідентифікатор книжки для видалення
}

//Функція збереження внесених даних користувачем
function populateBook() {
    const savedBook = localStorage.getItem(STORAGE_KEY);

    //Якщо шопінг лист порожній то з'являються напис та картинка
    if (savedBook.length === 0) {
        shopListMessageContainer.classList.remove('is-hidden');
    }
}

