
let callbackModal = document.querySelector('.callback-modal');
let buttonShowCallbackModal = document.querySelectorAll('.tel');
let buttonCloseCallbackModal = document.querySelector('.callback-modal__close');
let callbackOverlay = document.createElement('div');
let page = document.querySelector('.main-page');
let burgerMenu = document.querySelector('.burger-menu');

callbackOverlay.classList.add('overlay');
callbackOverlay.style.zIndex = '199';

for (let i = 0; i < buttonShowCallbackModal.length; i++) {
    buttonShowCallbackModal[i].addEventListener('click', function(e) {
        e.preventDefault();

        document.body.appendChild(callbackOverlay);
        
        callbackModal.classList.add('callback-modal--open');

        burgerMenu.style.opacity = '0.1';

        burgerMenu.style.zIndex = '198';


        if (detect.parse(navigator.userAgent).browser.family !== 'IE') {
            callbackModal.querySelector('.callback-form__phone-number').focus();
        }

        document.body.style = 'overflow: hidden';
    })
}

buttonCloseCallbackModal.addEventListener('click', function(e) {
    callbackModal.classList.remove('callback-modal--open');

    document.body.removeChild(callbackOverlay);

    document.body.removeAttribute('style');

    callbackModal.style.backgroundColor = 'white';

    burgerMenu.style.opacity = '1';

    burgerMenu.style.zIndex = '200';
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        callbackModal.classList.remove('callback-modal--open');

        document.body.removeChild(callbackOverlay);

        document.body.removeAttribute('style');
    }
});

callbackOverlay.addEventListener('click', function(){
    callbackModal.classList.remove('callback-modal--open');
    document.body.removeAttribute('style');
    document.body.removeChild(this);
    burgerMenu.style.opacity = '1';
    burgerMenu.style.zIndex = '200';
});

// if(window.matchMedia('(max-width: 320px)').matches){
// 	for (let i = 0; i < buttonShowCallbackModal.length; i++) {
//         buttonShowCallbackModal[i].addEventListener('click', function(e) {
//             e.preventDefault();
    
//             document.body.appendChild(callbackOverlay);
            
//             callbackModal.classList.add('callback-modal--open');
    
//             burgerMenu.classList.add('burger-menu__close');
    
//             if (detect.parse(navigator.userAgent).browser.family !== 'IE') {
//                 callbackModal.querySelector('.callback-form__phone-number').focus();
//             }
    
//             document.body.style = 'overflow: hidden';
//         })
//     }

    buttonCloseCallbackModal.addEventListener('click', function(e) {
        callbackModal.classList.remove('callback-modal--open');
    
        document.body.removeChild(callbackOverlay);
    
        document.body.removeAttribute('style');
    
        callbackModal.style.backgroundColor = 'white';
    
        page.style.opacity = '0';
    });
// burgerMenu.addEventListener('click', function(){
// if (callbackModal.classList.contains('callback-modal--open')){
//         callbackModal.classList.remove('callback-modal--open');
//         document.body.removeAttribute('style');
//         document.body.removeChild(this);
//         burgerMenu.style.opacity = '1';
// }
// });

// burgerMenu.addEventListener('click', function(){
//     callbackModal.classList.remove('callback-modal--open');
//     document.body.removeAttribute('style');
//     document.body.removeChild(this);
// });
// burgerMenu.addEventListener('click', function(){
//     callbackModal.classList.remove('callback-modal--open');
//     document.body.removeAttribute('style');
//     document.body.removeChild(this);
// });