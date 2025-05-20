'use strict';

const modal = document.querySelector('.modal-window');

const overlay = document.querySelector('.overlay');

const closeBtn = document.querySelector('.close-modal');

const modalOpen = document.querySelectorAll('.btn');

const closeModal = function(){
     modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < modalOpen.length; i++)   modalOpen[i].addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    //console.log(e.key);

    // if(e.key === 'Escape'){
    //     //if the key pressed 'Escape'.

    //     if(!modal.classList.contains('hidden')){
    //         closeModal();
    //     }
    // }
    // if the key pressed 'Escape' key and the model not contains 'hidden' class then closeModel.

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})