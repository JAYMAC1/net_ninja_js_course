// store data in local storage
localStorage.setItem('Name', 'James')
localStorage.setItem('Age', '49')

// get dta from local storage
let name = localStorage.getItem('Name')
let age = localStorage.getItem('Age')

const data = [
  {
    text: 'play piano',
    author: 'James',
  },
  {
    text: 'play guitar',
    author: 'Millie',
  },
  {
    text: 'do coding',
    author: 'Jess',
  },
]

localStorage.setItem('todos', JSON.stringify(data))

const todos = JSON.parse(localStorage.getItem('todos'))
console.log(todos)

// updating data
// console.log(localStorage)

// delete from LocalStorage

// localStorage.removeItem('Name')
// localStorage.clear()
