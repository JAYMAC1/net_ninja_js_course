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
*/

// ########################################################################
// Lesson 60 - Regular Expressions
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
