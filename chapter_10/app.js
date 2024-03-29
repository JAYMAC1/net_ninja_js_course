const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span><i class="far fa-trash-alt delete"></i>
    </li>
  `

  list.innerHTML += html
}

addForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const todo = addForm.add.value.trim()
  if (todo.length) {
    generateTemplate(todo)
    addForm.reset()
  }
})

// delete todos
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    console.log(e.target.parentElement)
    e.target.parentElement.remove()
  }
})

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.includes(term)
    })
    .forEach((todo) => {
      todo.classList.add('filtered')
    })

  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.includes(term)
    })
    .forEach((todo) => {
      todo.classList.remove('filtered')
    })
}

// search todos
search.addEventListener('keyup', (e) => {
  const term = search.value.trim()
  filterTodos(term)
})
