export default function () {
  return {
    // Support Ukraine
    supportUkraineCnt: document.querySelector('.support-list'),
    // Paginations
    divEl: document.querySelector('.shopping__list'),
    paginationsSection: document.querySelector('.paginations'),
    paginationContainerPages: document.querySelector(
      '.paginations__container-pages'
    ),
    paginationContainerBackBtn: document.querySelector(
      '.paginations__container-back'
    ),
    paginationContainerEndBtn: document.querySelector(
      '.paginations__container-end'
    ),
    startButton: document.querySelector("button[name='startButton']"),
    previousButton: document.querySelector("button[name='previousButton']"),
    nextButton: document.querySelector("button[name='nextButton']"),
    endButton: document.querySelector("button[name='endButton']"),
    activButton: document.querySelector('.active'),

    //Categories menu:
    allCategoriesBtn: document.querySelector('button[name=allcategories]'),
    categoryListEl: document.querySelector('.categories_list'),
    categoriesListContainer: document.querySelector('.categories'),
    categoryContainerEl: document.querySelector('.content-rendering-container'),
  };
}
