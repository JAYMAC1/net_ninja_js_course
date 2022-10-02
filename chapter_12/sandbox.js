// fetch api

const getTodos = async () => {
  const response = await fetch('todoss/luigi.json')

  if (response.status !== 200) {
    throw new Error('Cannot fetch the data')
  }
  const data = await response.json()

  return data
}

getTodos()
  .then((data) => {
    console.log('resolved: ', data)
  })
  .catch((err) => {
    console.log('rejected: ', err)
  })

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
