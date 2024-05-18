// const hamburger = document.querySelector('.hamburger');
// const menu = document.querySelector('.menu');
// const coverBlue = document.querySelector('.coverBlue');

// hamburger.addEventListener('click', function() {
//   hamburger.classList.toggle('active');
//   menu.classList.toggle('active');
//   coverBlue.classList.toggle('active');
// });

// hamburger.addEventListener('transitionend', function() {
//   if (!hamburger.classList.contains('active')) {
//     resetHamburger();
//   }
// });

// function resetHamburger() {
//   hamburger.classList.remove('active');
//   menu.classList.remove('active');
//   overlay.classList.remove('active');
// }

const hamburger =document.querySelector('.hamburger');
let menuOpen = false;
hamburger.addEventListener('click',()=>{
    if(menuOpen){
        hamburger.classList.add('open');
    }
    else {
        hamburger.classList.remove('open');
        menuOpen=false;
    }
});
