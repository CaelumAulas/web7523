var menuItem = document.querySelector('.menu-item')

console.log(menuItem)

menuItem.addEventListener('click', function() {
  var card = this.parentNode.parentNode

  card.classList.add('card_isRemove')

  card.addEventListener('transitionend', function() {
    card.remove()
  })
})