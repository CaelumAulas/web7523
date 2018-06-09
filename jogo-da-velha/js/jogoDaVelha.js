;(function (doc) {
  'use strict'
  
  const $jogoDaVelha = document.querySelector('.jogoDaVelha')

  $jogoDaVelha.addEventListener('keyup', function(event) {
    const $jogoDaVelhaCelula = event.target

    if($jogoDaVelhaCelula.classList.contains('jogoDaVelha-celula')) {
      const teclasQuePode = []
      teclasQuePode[88] = 'x'
      teclasQuePode[79] = 'o'
  
      console.log(teclasQuePode[event.keyCode])
  
      $jogoDaVelhaCelula.textContent = teclasQuePode[event.keyCode] || 'eita'  
    }
  })

  // const $jogoDaVelhaCelulas = doc.querySelectorAll('.jogoDaVelha-celula')

  // $jogoDaVelhaCelulas.forEach(function($jogoDaVelhaCelula) {
  //   $jogoDaVelhaCelula.addEventListener('keyup', function(event) {
  //     const teclasQuePode = []
  //     teclasQuePode[88] = 'x'
  //     teclasQuePode[79] = 'o'
  
  //     console.log(teclasQuePode[event.keyCode])
  
  //     this.textContent = teclasQuePode[event.keyCode] || 'eita'  
  //   })
  // })
})(document)