;(function() {
  'use strict'

  // const anchors = document.querySelectorAll('a')

  // anchors.forEach(function(anchor) {
  //   anchor.addEventListener('click', function(event) {
  //     event.preventDefault()
  
  //     alert('Estamos em manutenção')
  //   })
  // })

  const menu = document.querySelector('.menu')

  menu.addEventListener('click', function(event) {
    const origin = event.target

    console.log(origin.tagName)
    
    if(origin.classList.contains('menu-item-action')) {
      alert('Deu ruim!')
    }
  })

  
})()