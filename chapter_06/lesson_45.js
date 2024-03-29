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


// ########################################################################
// Lesson 51 - Adding and Removing Classes
// ########################################################################

const content = document.querySelectorAll('p')

content.forEach((p) => {
  if (p.textContent.includes('error')) {
    p.classList.add('error')
  }
  if (p.textContent.includes('success')) {
    p.classList.add('success')
  }
})

const title = document.querySelector('.title')
title.classList.toggle('test')


// ########################################################################
// Lesson 52 - Parents, Children & Siblings
// ########################################################################

const article = document.querySelector('article')

// Array.from(article.children).forEach((child) => {
  //   child.classList.add('article-element')
  // })
  
  const title = document.querySelector('h2')
  console.log(title.parentElement)
  console.log(title.nextElementSibling)
  console.log(title.previousElementSibling)
  
  
  // ########################################################################
  // Lesson 53 - Event Basics (click events)
  // ########################################################################
  
  const button = document.querySelector('button')
  button.addEventListener('click', (e) => {
    console.log('clicked')
  })
  
  const todos = document.querySelectorAll('li')
  todos.forEach((todo) => {
    todo.addEventListener('click', (e) => {
      // e.target.remove()
      e.target.style.textDecoration = 'line-through'
    })
  })
  
  
  // ########################################################################
  // Lesson 54 - Creating & Removing Elements
  // ########################################################################
  
  const list = document.querySelector('ul')
  
  const button = document.querySelector('button')
  button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'New Item'
    // list.append(li)
    list.prepend(li)
  })
  
  const todos = document.querySelectorAll('li')
  todos.forEach((todo) => {
    todo.addEventListener('click', (e) => {
      e.target.remove()
    })
  })
  
  

// ########################################################################
// Lesson 55 - Event Bubbling (and Delegation)
// ########################################################################

const list = document.querySelector('ul')

const button = document.querySelector('button')
button.addEventListener('click', () => {
  const li = document.createElement('li')
  li.textContent = 'New Item'
  // list.append(li)
  list.prepend(li)
})

// const items = document.querySelectorAll('li')
// items.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     console.log('event in LI')
//     e.stopPropagation()
//     e.target.remove()
//   })
// })

list.addEventListener('click', (e) => {
  // console.log('event in UL')
  if (e.target.tagName === 'LI') {
    e.target.remove()
  }
})



// ########################################################################
// Lesson 56 - More DOM Events
// ########################################################################

const copy = document.querySelector('.copy-me')
copy.addEventListener('copy', () => {
  console.log('Oi! my content is copyright')
})

const box = document.querySelector('.box')
box.addEventListener('mousemove', (e) => {
  // console.log(e)
  // console.log(e.offsetX, e.offsetY)
  box.textContent = `x pos - ${e.offsetX} | y pos - ${e.offsetY}`
})

document.addEventListener('wheel', (e) => {
  console.log(e.pageX, e.pageY)
})
*/

// ########################################################################
// Lesson 57 - Building a Popup
// ########################################################################

const button = document.querySelector('button')
const popupWrapper = document.querySelector('.popup-wrapper')
const closePopup = document.querySelector('.popup-close')

button.addEventListener('click', (e) => {
  console.log('button clicked')
  popupWrapper.style.display = 'block'
})

closePopup.addEventListener('click', (e) => {
  popupWrapper.style.display = 'none'
})

popupWrapper.addEventListener('click', (e) => {
  popupWrapper.style.display = 'none'
})
