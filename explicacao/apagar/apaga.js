;(function () {
  'use strict'

  
  const checkbox = document.querySelector('input[type=checkbox]')
  const inputText = document.querySelector('input[type=text]') 
  const form = document.querySelector('form')


  

  checkbox.addEventListener('change', function() {
    // if (document.body.classList.contains('colocaCor')) {
    //   document.body.classList.remove('colocaCor')  
    // } else {
    //   document.body.classList.add('colocaCor')
    // }

    if (this.checked == true) {
      document.body.classList.remove('colocaCor')
    } else {
      document.body.classList.add('colocaCor')
    }
  })

  // form.addEventListener('focusout', function() {
  //   console.log('blur dentro do form')
  // })

  // inputText.addEventListener('blur', function() {
  //   console.log('blur text')
  // })

  // inputText.addEventListener('focus', function() {
  //   console.log('focus text')
  // })

  // inputText.addEventListener('input', function() {
  //   console.log('input text')
  // })

  // inputText.addEventListener('keyup', function() {
  //   console.log('keyup text')
  // })

  // inputText.addEventListener('keydown', function() {
  //   console.log('keydown text')
  // })

  // inputText.addEventListener('keypress', function() {
  //   console.log('keypress text')
  // })
})()