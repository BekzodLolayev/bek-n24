const elDemoModalOpener = document.querySelector('.modal-content-icon');
const elDemoModal = document.querySelector('#demo-modal');
elDemoModalOpener.addEventListener('click', function () {
    elDemoModal.classList.add('modal-open');
});