;(function (doc) {
  'use strict'
  
  const $jogoDaVelhaCelulas = doc.querySelectorAll('.jogoDaVelha-celula')

  $jogoDaVelhaCelulas.forEach(function($jogoDaVelhaCelula) {
    $jogoDaVelhaCelula.addEventListener('keyup', function(event) {
      console.log(event)

      const teclasQuePode = []
      teclasQuePode[88] = 'x'
      teclasQuePode[79] = 'o'
  
      console.log(teclasQuePode[event.keyCode])
  
      this.textContent = teclasQuePode[event.keyCode] || 'eita'
  
      // if (event.keyCode == 88) {
      //   this.textContent = 'x'
      // }
  
      // if (event.keyCode == 79) {
      //   this.textContent = 'o'
      // }
      
    })
  })
})(document)