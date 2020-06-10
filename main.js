var menuBtn = document.querySelector('.menu-btn');
let openStatus = false;
menuBtn.addEventListener('click', function(){
    if(!openStatus) {
        menuBtn.classList.add('open');
        openStatus = true;
    } else {
        menuBtn.classList.remove('open');
        openStatus = false;
    }
})