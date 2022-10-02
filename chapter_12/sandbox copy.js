const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      } else if (request.readyState === 4) {
        reject('could not fetch data')
      }
    })
    request.open('GET', resource)
    request.send()
  })
}

getTodos('todos/luigi.json')
  .then((data) => {
    console.log('Promise 1 resolved', data)
    return getTodos('todos/mario.json')
  })
  .then((data) => {
    console.log('Promise 2 resolved', data)
    return getTodos('todos/shaun.json')
  })
  .then((data) => {
    console.log('Promise 3 resolved', data)
  })
  .catch((err) => {
    console.log(err)
  })
// getTodos('todos/luigi.json', (err, data) => {
//   console.log(data)
//   getTodos('todos/mario.json', (err, data) => {
//     console.log(data)
//     getTodos('todos/shaun.json', (err, data) => {
//       console.log(data)
//     })
//   })
// })

// Promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something

//     resolve('some data')
//     reject('some error')
//   })
// }

// getSomething().then(
//   (data) => {
//     console.log(data)
//   },
//   (err) => {
//     console.log(err)
//   }
// )

// getSomething()
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
