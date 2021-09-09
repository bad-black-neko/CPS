
var burger = document.querySelector(".burger");
var burgerMenu = document.querySelector(".burger-menu");
var mainPage = document.querySelector(".main-page");
var closeBtn = document.querySelector(".burger-menu__close");
let callbackOverlay = document.createElement('div');

callbackOverlay.classList.add('overlay');
callbackOverlay.style.zIndex = '199';

burger.addEventListener('click', dropBurger); 

function dropBurger() {
    if(window.innerWidth < 1121) {
    burgerMenu.classList.toggle('show-burger')
    mainPage.style.opacity = '0.1';
    document.body.appendChild(callbackOverlay);
}
}

closeBtn.addEventListener('click', closeBurger);
function closeBurger(){
    burgerMenu.classList.remove('show-burger');
    mainPage.style.opacity = '1';
    document.body.removeChild(callbackOverlay);
    // burgerMenu.style.zIndex = '200';
}

let linksContainer = document.querySelector('.dropdown-navigation');

linksContainer.addEventListener('click', function(e) {
	let links = document.querySelectorAll('.dropdown-navigation__link')
	let target1 = e.target
    if (e.target.classList.contains('dropdown-navigation__link')){
        Array.from(links).forEach(item => {
            item.classList.remove('dropdown-navigation__link-focus')
        }
)
    target1.classList.add('dropdown-navigation__link-focus')
    }
})

callbackOverlay.addEventListener('click', function(){
    burgerMenu.classList.remove('show-burger');
    document.body.removeAttribute('style');
    document.body.removeChild(this);
    mainPage.style.opacity = '1';
});