const loader = document.querySelector('.js-loader');
function showLoader() {
    loader.classList.remove('hidden');
};

function hideLoader() {
     loader.classList.add('hidden');
}


export { showLoader, hideLoader };
