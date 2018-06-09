// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// menuItemAction.onclick = removeTodasAsBolas

// function removeTodasAsBolas () {
//   console.log('Removi todas as bolas')
// }
// menuItemAction.onclick = function () {
//   console.log('Removi todas as bolas')
// }

// menuItemAction.addEventListener('click',function() {
//   console.log('Removeu novamente')
// })


var menuItemAction = document.querySelector('.menu-item-action')
var azuis = document.querySelector('.menu-item-action_second')
var noJs = document.querySelectorAll('.no-js')

noJs.forEach(function(element) {
  element.classList.remove('no-js')
})

menuItemAction.addEventListener('click', function() {
  var pais = document.querySelectorAll('.pai')

  for(var index = 0; index <= pais.length; index = index + 1) {
    pais[index].remove()
  }
})

azuis.addEventListener('click', function() {
  var vermelhos = document.querySelectorAll('.content_first')

  vermelhos.forEach(function(vermelho) {
    var pai = vermelho.parentNode

    if (pai.classList.contains('esconde')) {
      pai.classList.remove('esconde')
    } else {
      pai.classList.add('esconde')
    }
  })
})










































