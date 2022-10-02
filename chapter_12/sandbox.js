// fetch api

const getTodos = async () => {
  const response = await fetch('todos/luigi.json')
  const data = await response.json()

  if (response.status === 200) {
    return data
  } else {
    return 'Could not fetch data'
  }
}

console.log(1)
console.log(2)
getTodos()
  .then((data) => {
    console.log('resolved: ', data)
  })
  .catch((err) => {
    console.log('rejected: ', err)
  })
console.log(3)
console.log(4)

// fetch('todos/luigi.json')
//   .then((res) => {
//     console.log('resolved', res)
//     return res.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log('rejected', err)
//   })
