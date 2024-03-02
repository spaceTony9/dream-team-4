import axios from 'axios';
import iziToast from 'izitoast';

const apiUrl = `https://books-backend.p.goit.global/books/${id}`;

axios
  .get(apiUrl)
  .then(response => {
    const bookData = response.data;
    renderBookDetails(bookData);
  })
  .catch(error => {
    showError(error);
  });

function renderBookDetails(bookData) {
  const bookDetailsContainer = document.getElementById('bookDetails');

  const bookTemplate = `
    <img src="${bookData.book_image}" alt="Book Cover">
    <h2>${bookData.title}</h2>
    <p>${bookData.author}</p>
<p>DESCRIPTION</p>
       <ul>
      ${bookData.buy_links
        .map(
          buy_link => `<li><a href="${buy_link.url}">${buy_link.name}</a></li>`
        )
        .join('')}
    </ul>
  `;

  bookDetailsContainer.innerHTML = bookTemplate;
}

function showError(msg) {
  iziToast.error({
    title: 'Error',
    message: msg,
    position: 'topCenter',
  });
}
