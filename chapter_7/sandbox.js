/*
// ########################################################################
// Lesson 59 - Submit Events
// ########################################################################

const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(username.value)
  console.log(form.username.value)
})


// ########################################################################
// Lesson 60/61 - Regular Expressions
// ########################################################################

const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(username.value)
  console.log(form.username.value)
})

// testing RegEx
const username = 'jamesmcn'
const pattern = /^[a-z]{6,}$/

// let result = pattern.test(username)
// if (result) {
//   console.log(`regex test passed :) `)
// } else {
//   console.log(`input string failed to match`)
// }

let result = username.search(pattern)
console.log(result)
*/

// ########################################################################
// Lesson 62/63 - Basic Form Validation
// ########################################################################

const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const username = form.username.value
const pattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // Validation

  let result = pattern.test(username)
  if (result) {
    feedback.textContent = 'username ok'
  } else {
    feedback.textContent = 'username invalid'
  }
  console.log(result)
})

// live feedback
form.username.addEventListener('keyup', (e) => {
  // console.log(e)
  if (pattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success')
  } else {
    form.username.setAttribute('class', 'error')
  }
})
