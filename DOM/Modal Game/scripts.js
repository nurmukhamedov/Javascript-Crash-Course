 const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const closeFunction = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openFunction = function() {
    modal.classList.remove('hidden'); // we are not selecting class so we don't need to use dot before hidden
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', openFunction);
btnCloseModal.addEventListener('click', closeFunction);
overlay.addEventListener('click', closeFunction);

document.addEventListener('keydown', function(e) {

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeFunction();
    }
});
