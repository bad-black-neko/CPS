// let feedbackModal = document.querySelector('.feedback-modal');
// let buttonShowfeedbackModal = document.querySelectorAll('.primary-btn--type_mail');
// let buttonClosefeedbackModal = feedbackModal.querySelector('.feedback-modal__close');
// let feedbackOverlay = document.createElement('div');
// let page = document.querySelector('.main-page');
// let burgerMenu = document.querySelector('.burger-menu')

let feedbackModal = document.querySelector('.feedback-modal');
let buttonShowfeedbackModal = document.querySelectorAll('.chat-btn-test');
let buttonClosefeedbackModal = feedbackModal.querySelector('.feedback-modal__close');
let feedbackOverlay = document.createElement('div');
let page = document.querySelector('.main-page');
let burgerMenu = document.querySelector('.burger-menu');

feedbackOverlay.classList.add('overlay');
feedbackOverlay.style.zIndex = '199';

for (let i = 0; i < buttonShowfeedbackModal.length; i++) {
    buttonShowfeedbackModal[i].addEventListener('click', function(e) {
        e.preventDefault();

        document.body.appendChild(feedbackOverlay);

        feedbackModal.classList.add('feedback-modal--open');

        burgerMenu.style.opacity = '0.1';

        burgerMenu.style.zIndex = '198';

        if (detect.parse(navigator.userAgent).browser.family !== 'IE') {
            feedbackModal.querySelector('.feedback-form__name').focus();
        }

        document.body.style = 'overflow: hidden';
    });
}

buttonClosefeedbackModal.addEventListener('click', function(e) {
    feedbackModal.classList.remove('feedback-modal--open');

    document.body.removeChild(feedbackOverlay);

    document.body.removeAttribute('style');

    burgerMenu.style.opacity = '1';

    burgerMenu.style.zIndex = '200';

});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        feedbackModal.classList.remove('feedback-modal--open');

        document.body.removeChild(feedbackOverlay);

        document.body.removeAttribute('style');
    }
});

feedbackOverlay.addEventListener('click', function(){
    feedbackModal.classList.remove('feedback-modal--open');
    document.body.removeAttribute('style');
    document.body.removeChild(this);
    burgerMenu.style.opacity = '1';
    burgerMenu.style.zIndex = '200';
});

function checkForm(formName, requiredFieldsName) {
    let form = document.querySelector('.' + formName);
    let requiredFields = [];

    for (let i = 0; i < requiredFieldsName.length; i++) {
        requiredFields[i] = form.querySelector(requiredFieldsName[i]);
    }

    form.onsubmit = function(e) {
        let canSubmit = true;
        for (let i = 0; i < requiredFields.length; i++) {
            if (requiredFields[i].value === '') {
                canSubmit = false;
                requiredFields[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            }
        }

        if (!canSubmit) {
            e.preventDefault();
        }
    }
}

checkForm('feedback-form', ['.feedback-form__name', '.feedback-form__email']);

