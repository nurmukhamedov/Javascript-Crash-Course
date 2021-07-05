'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', function() {
        modal.classList.remove('hidden'); // we are not selecting class so we don't need to use dot before hidden
        overlay.classList.remove('hidden');
    });

const closeFunction = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeFunction);
overlay.addEventListener('click', closeFunction);
