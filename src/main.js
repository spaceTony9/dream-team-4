// Reuta
// import './js/APIservice.js';
// import './js/book-categories';
// import './js/book-categories-rendering';
import { CONSTANTS } from './js/constants.js';
import { urlCreator } from './js/api-service.js';

urlCreator(CONSTANTS.SELECTED_CATEGORY, 'Hardcover Fiction')
  .then(({ data }) => {
    console.log(data);
  })
  .catch(error => console.log(error));
