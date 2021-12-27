var mMenuBtn = document.querySelector('.m-menu__btn');
var modal = document.querySelector('.modal');
var closeModal = document.querySelectorAll('.close-modal');

mMenuBtn.onclick = ()=>{
    modal.classList.add('fadeIn');
    setTimeout(function(){
        modal.lastElementChild.classList.add('fadeInRight');
    },0);
}

closeModal.forEach(item =>{
    item.onclick = ()=>{
        modal.classList.remove('fadeIn');
        modal.lastElementChild.classList.remove('fadeInRight');

    }
})