// fetch api

fetch('todos/luigi.json')
  .then((res) => {
    console.log('resolved', res)
    return res.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log('rejected', err)
  })
