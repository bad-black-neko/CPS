import '../scss/style.scss';
import '../js/readNext.js';
import '../js/burgerMenu.js';
import '../js/callback';
import '../js/feedback';
import '../js/tabs.js';
import '../js/languages.js';

console.log('Works!');

var swiper = new Swiper(".mySwiper", {
    pagination: {
    el: ".swiper-pagination",
    },
});

// var burger = document.querySelector(".burger");
// var burgerMenu = document.querySelector(".burger-menu");
// var page = document.querySelector(".main-page");
// var closeBtn = document.querySelector(".burger-menu__close");

// burger.addEventListener('click', dropBurger); 

// function dropBurger() {
//     if(window.innerWidth < 1121) {
//     burgerMenu.classList.toggle('show-burger')
//     page.style.opacity = '0.1';
// }
// }

// closeBtn.addEventListener('click', closeBurger);
// function closeBurger(){
//     burgerMenu.classList.remove('show-burger')
//     page.style.opacity = '1';
// }