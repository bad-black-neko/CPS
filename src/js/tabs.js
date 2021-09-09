// Get all tabs
var tabs_items = document.querySelectorAll(".tabs");

// Loop through all tabs
tabs_items.forEach(function (tabs) {
// Set variable
var controls = tabs.querySelector(".tabs__control");
var tab = controls.querySelectorAll(".tabs__tab");
var contents = tabs.querySelector(".tabs__contents");
var content = contents.querySelectorAll(".tabs__content");

// Loop through all tabs
tab.forEach(function (item) {
item.onclick = function (e) {
    e.preventDefault();

    // Get clicked tab ID
    var tabId = item.dataset.tab;

    // Set current tab
    tab.forEach(function (item) {
    if (tabId == item.dataset.tab) {
        item.classList.add("tabs__tab--current");
        item.setAttribute('aria-selected','true');
        item.removeAttribute('tabindex','-1');
    } else {
        item.classList.remove("tabs__tab--current");
        item.setAttribute('aria-selected','false');
        item.setAttribute('tabindex','-1');
    }
    });

    // Set current content
    content.forEach(function (item) {
    if (tabId == item.dataset.tabContent) {
        item.classList.add("tabs__content--current");
        item.removeAttribute('hidden','hidden');
    } else {
        item.classList.remove("tabs__content--current");
        item.setAttribute('hidden','hidden');
    }
    });
};
});
});

// let btnsContainer = document.querySelector('.btn-section');
// let sectionBtns = document.querySelectorAll('.btn-section__btn');

// btnsContainer.addEventListener('click', function(e) {
// 	let sectionBtn = e.target
//     if (e.target.classList.contains('btn-section__btn')){
//         Array.from(sectionBtns).forEach(item => {
//             item.classList.remove('btn-section__btn-focus')
//       })
//           sectionBtn.classList.add('btn-section__btn-focus')
//     }
// })

// var tabNavs = document.querySelectorAll(".nav-tab");
// var tabPanes = document.querySelectorAll(".tab-pane");

// for (var i = 0; i < tabNavs.length; i++) {

//   tabNavs[i].addEventListener("click", function(e){
//     e.preventDefault();
//     var activeTabAttr = e.target.getAttribute("data-tab");

//     for (var j = 0; j < tabNavs.length; j++) {
//       var contentAttr = tabPanes[j].getAttribute("data-tab-content");

//       if (activeTabAttr === contentAttr) {
//         tabNavs[j].classList.add("active");
//         tabPanes[j].classList.add("active"); 
//       } else {
//         tabNavs[j].classList.remove("active");
//         tabPanes[j].classList.remove("active");
//       }
//     };
//   });
// }
