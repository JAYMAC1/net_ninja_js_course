const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let score = 0
  // Capture form select values into an array of the users answers
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ]

  // compare answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25
    }
  })

  // Output Score
  scrollTo(0, 0)
  result.querySelector('span').textContent = `${score}%`
  result.classList.remove('d-none')

  //  setting an interval
  let output = 0
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`
    if (output === score) {
      clearInterval(timer)
    }
    output++
  }, 10)
})
