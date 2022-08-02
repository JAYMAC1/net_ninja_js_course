console.log('connected')
const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')

console.log(form)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(form.q1.value)

  let score = 0
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ]
  console.log(userAnswers)
})
