// <=======Scroll-down-button========>

const downBtn = document.getElementById('scrollDown');
downBtn.addEventListener('click', () =>{
    window.scrollTo({
        top:500,
        left:0,
        behavior:"smooth"
    })
})



// <===========Modal Function(POpup)=========>


var modalBtn = document.querySelector('.modal-btn')
var modalBg = document.querySelector('.modal-bg')
var modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('bg-active');
})

modalClose.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');

})










