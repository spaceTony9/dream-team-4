import { APIService } from './APIservice';
import { showLoader, hideLoader } from './loader';
const api = new APIService();

const categoriesList = document.querySelector('.book-category__list');

async function getBooksCategoryList() {
  try {
    showLoader();
    Loading.standard('Loading...');
    const resp = await api.fetchBooksCategoryList();
    if (!resp.ok) {
      throw new Error('Failed to fetch book categories');
    }
    hideLoader();
    Loading.remove('Loading...');
    const data = await resp.data;
    
    return data;
    
  } catch (error) {
    console.error('Error fetching book categories:', error);
    reportsFailure('Sorry, something went wrong. Please try again later.');
    throw error;
  }
}

async function getBookCategory() {
  try {l
   
    const categories = await getBooksCategoryList();
    const markup = categories
      .map(cat => `<li class="book-category__list-item">${cat.list_name}</li>`)
      .join('');
    categoriesList.insertAdjacentHTML('beforeend', markup);
    //  loader.style.display = 'none';
  } catch (error) {  
    console.error('Error getting book categories:', error);
    reportsFailure('Sorry, something went wrong. Please try again later.');
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
    highlightCategory(category);

    if (category !== 'All categories') {
      await createMarkup(category);
    } else {
      await renderCategories();
    }
  
  } catch (error) {
    
    console.error('Error processing category selection:', error);
    reportsFailure('Sorry, something went wrong. Please try again later.');
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
