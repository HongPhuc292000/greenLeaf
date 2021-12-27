var mMenuBtn = document.querySelector('.m-menu__btn');
var modal = document.querySelector('.modal');
var closeModal = document.querySelectorAll('.close-modal');

mMenuBtn.onclick = ()=>{
    modal.classList.add('fadeIn');
    modal.lastElementChild.classList.add('fadeInRight');
}

closeModal.forEach(item =>{
    item.onclick = ()=>{
        modal.classList.remove('fadeIn');
        modal.lastElementChild.classList.remove('fadeInRight');
    }
})