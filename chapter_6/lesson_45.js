/*
// Lesson 46 - The Query Selector
//  Get single css selector
// const para = document.querySelector('p')
// const para = document.querySelector('.error')
// const para = document.querySelector('div.error')
// const para = document.querySelector('body > h1')

// console.log(para)

// Get multiple css selectors

// const paras = document.querySelectorAll('p')
// const errors = document.querySelectorAll('.error')

// paras.forEach((para) => console.log(para))
// errors.forEach((error) => console.log(error))

// console.log(errors)

// ########################################################################
// Lesson 47 - Other Ways to Query the DOM
// ########################################################################

// get an element by ID
// const title = document.getElementById('page-title')
// console.log(title)

// get elements by their class name
// const errors = document.getElementsByClassName('error') // HTMLCollection returned cannot use forEach
// console.log(errors)
// console.log(errors[0])

// get elemens by their tag name
const paras = document.getElementsByTagName('p')
console.log(paras[2])


// ########################################################################
// Lesson 48 - Adding & Changing Page Content
// ########################################################################

// const para = document.querySelector('p')

// console.log(para.innerHTML)
// para.innerText = 'Mods Rule OK'

// const paras = document.querySelectorAll('p')

// paras.forEach((para) => {
//   console.log(para.innerText)
//   para.innerText += ' new text'
// })

// const content = document.querySelector('.content')
// console.log(content.innerHTML)
// content.innerHTML += '<h2>Updated content!!!</h2>'

const people = ['James', 'Rachel', 'Millie', 'Jess']

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`
})


// ########################################################################
// Lesson 49 - Getting & Setting Attributes
// ########################################################################

// const link = document.querySelector('a')

// console.log(link.getAttribute('href'))

// link.setAttribute('href', 'https://www.thenetninja.co.uk')
// link.innerText = 'The Net Ninja'

// const msg = document.querySelector('p')
// console.log(msg.getAttribute('class'))
// msg.setAttribute('class', 'success')
// msg.setAttribute('style', 'color: green;')

// ########################################################################
// Lesson 50 - Changing CSS Styles
// ########################################################################

const title = document.querySelector('h1')

// title.setAttribute('style', 'color: blue;')

title.style.margin = '50px'
title.style.fontSize = '16px'
title.style.color = 'crimson'
title.style.margin = ''
console.log(title.style.margin)

*/

// ########################################################################
// Lesson 50 - Changing CSS Styles
// ########################################################################
