// let langBtns = document.querySelectorAll('.languages-list__link');

// langBtns.forEach(item => {
//     item.addEventListener('click', (event) => {
//         event.classList.remove('languages-list__link--active');
//         event.target.classList.add('languages-list__link--active');
//     })
// })

let container = document.querySelector('.languages-list');

container.addEventListener('click', function(e) {
	let items = document.querySelectorAll('.languages-list__link')
	let target = e.target
    Array.from(items).forEach(item => {
  	    item.classList.remove('languages-list__link--active')
    })
target.classList.add('languages-list__link--active')
})