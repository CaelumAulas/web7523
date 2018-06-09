var card = document.querySelector('.card')
var menu = document.querySelector('.menu')

card.addEventListener('click', function() {
  menu.classList.toggle('menu_isActive')
})