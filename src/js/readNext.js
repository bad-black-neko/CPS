var textBtn1 = document.querySelector(".read-btn1");
// var readText1 = document.querySelector(".tabs__content--current");
let readText1;
var textOnBtn1 = document.querySelector(".btn__text1");
var nextIcon1 = document.querySelector(".icon1");

function textUpdate() {
    readText1 = document.querySelector(".tabs__content--current");
}

textBtn1.addEventListener('click', () => {
    textUpdate();
    readText1.querySelector(".tabs__content--current");
    readText1.classList.toggle('show');
})

textBtn1.addEventListener('click', changeText);

function changeText() {

    if (readText1.classList.contains('show')) {
        textOnBtn1.innerHTML = 'Скрыть';
        nextIcon1.style.transform = "rotate(180deg)";
    } else {
        textOnBtn1.innerHTML = 'Читать далее';
        nextIcon1.style.transform = "rotate(0deg)";
    }
}

var btnsContainer = document.querySelector(".brand-btns");
var showMoreBtn = document.querySelector(".show-more__btn");
var textOnShowBtn = document.querySelector(".show-more__text");
var showMoreIcon = document.querySelector(".show-more__icon");

showMoreBtn.addEventListener('click', () => {
    btnsContainer.classList.toggle('show');
})

textOnShowBtn.addEventListener('click', changeTextOnBtn);

function changeTextOnBtn() {
    if (btnsContainer.classList.contains('show')) {
        textOnShowBtn.innerHTML = 'Показать все';
        showMoreIcon.style.transform = "rotate(0deg)";
    } else {
        textOnShowBtn.innerHTML = 'Скрыть';
        showMoreIcon.style.transform = "rotate(180deg)";
    }
}

var Container = document.querySelector(".technique-types");
var MoreBtn = document.querySelector(".btn2");
var textShowBtn = document.querySelector(".text2");
var showIcon = document.querySelector(".icon2");

MoreBtn.addEventListener('click', () => {
    Container.classList.toggle('show');
})

textShowBtn.addEventListener('click', changeTextOnBtn2);

function changeTextOnBtn2() {
    if (Container.classList.contains('show')) {
        textShowBtn.innerHTML = 'Показать все';
        showIcon.style.transform = "rotate(0deg)";
    } else {
        textShowBtn.innerHTML = 'Скрыть';
        showIcon.style.transform = "rotate(180deg)";
    }
}