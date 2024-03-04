import { APIService } from './APIservice';
import createMarkup from './book-categories-rendering';
import renderCategories from './bestsellers';

const api = new APIService();

const categoriesList = document.querySelector('.book-category__list');

async function getBooksCategoryList() {
  try {
    // Show loading indicator
    showLoadingIndicator();
    
    const resp = await api.fetchBooksCategoryList();
    
    // Hide loading indicator
    hideLoadingIndicator();
    
    const data = await resp.data;
    return data;
  } catch (error) {
    console.log(error);
    // Show failure notification
    showFailureNotification('Sorry, no books were found. Please try again.');
  }
}

async function getBookCategory() {
  const categories = await getBooksCategoryList();
  
  const markup = categories
    .map(cat => `<li class="book-category__list-item">${cat.list_name}</li>`)
    .join('');
    
  categoriesList.insertAdjacentHTML('beforeend', markup);
}

if (categoriesList) {
  getBookCategory();
  categoriesList.addEventListener('click', onCategoryListSearchCategory);
}

async function onCategoryListSearchCategory(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }

  const category = e.target.textContent;
  highlightCategory(category);

  if (category !== 'All categories') {
    await createMarkup(category);
  } else {
    await renderCategories();
  }
}

export function highlightCategory(category) {
  const items = document.querySelectorAll('.book-category__list-item');

  for (const item of items) {
    if (item.textContent === category)
      item.classList.add('active');
    else
      item.classList.remove('active');
  }
}

function showLoadingIndicator() {
  // Implement your loading indicator logic here
}

function hideLoadingIndicator() {
  // Implement your loading indicator hiding logic here
}

function showFailureNotification(message) {
  // Implement your failure notification logic here
  alert(message); // As a simple example, using alert for showing error message
}