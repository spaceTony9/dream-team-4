export default function () {
  return {
    // Support Ukraine
    supportUkraineCnt: document.querySelector('.support-list'),
    // Paginations
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

    singUpBtn: document.querySelector('.userbar-btn'),
  };
}
