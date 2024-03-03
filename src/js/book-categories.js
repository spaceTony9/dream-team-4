import { APIService } from "/js/APIservice.js?t=1709491142265";
import createMarkup from "/js/book-categories-rendering.js?t=1709494524614";
import renderCategories from "/js/bestsellers.js?t=1709494524614";

const api = new APIService();
const categoriesList = document.querySelector('.book-category__list');

async function getBooksCategoryList() {
  try {
    const resp = await api.fetchBooksCategoryList();
    if (resp.status !== 200) {
      throw new Error('Failed to fetch book categories');
    }
    const data = await resp.data;
    return data;
  } catch (error) {
    console.error('Error fetching book categories:', error);
    // Замените этот console.error на функцию обратного вызова для отображения ошибки пользователю
    throw error;
  }
}

async function getBookCategory() {
  try {
    const categories = await getBooksCategoryList();
    const markup = categories
      .map(cat => `<li class="book-category__list-item">${cat.list_name}</li>`)
      .join('');
    categoriesList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('Error getting book categories:', error);
    // Замените этот console.error на функцию обратного вызова для отображения ошибки пользователю
  }
}

if (categoriesList) {
  getBookCategory();
  categoriesList.addEventListener('click', onCategoryListSearchCategory);
}

async function onCategoryListSearchCategory(e) {
  try {
    if (e.target.nodeName !== 'LI') {
      return;
    }
    const category = e.target.textContent;
    if (category !== 'All categories') {
      await createMarkup(category);
    } else {
      await renderCategories();
    }
  } catch (error) {
    console.error('Error processing category selection:', error);
    // Замените этот console.error на функцию обратного вызова для отображения ошибки пользователю
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
