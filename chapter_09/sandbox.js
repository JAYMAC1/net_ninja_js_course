// ########################################################################
// Lesson 71 - Filter Method
// ########################################################################

// const scores = [10.3, 15, 25, 50, 40, 5]

// Array method - filter
// Filter out items based on a certain condition to a new filtered array
// i.e all scores over 20

// const filteredScores = scores.filter((score) => {
//   return score > 20
// })

// console.log(filteredScores)

// const users = [
//   { name: 'James', premium: false },
//   { name: 'Rachel', premium: true },
//   { name: 'Millie', premium: true },
//   { name: 'Jess', premium: false },
// ]

// const filteredUsers = users.filter((user) => user.premium)

// console.log(filteredUsers)

// ########################################################################
// Lesson 72 - Map Method
// ########################################################################

// Takes array and 'maps' into a completely new array based on the original contents
// i.e. iterate the prices and for each item calulate a 'sale' price and return to a new array

// const prices = [20, 10, 30, 25, 15, 40, 80, 5]

// const salePrices = prices.map((price) => {
//   return price / 2
// })

// console.log(salePrices)

// const products = [
//   { name: 'gold star', price: 20 },
//   { name: 'mushroom', price: 40 },
//   { name: 'green shells', price: 30 },
//   { name: 'banana skin', price: 10 },
//   { name: 'red shells', price: 50 },
// ]

// const saleProducts = products.map((product) => {
//   if (product.price > 30) {
//     return { name: product.name, price: (product.price = product.price / 2) }
//   } else {
//     return product
//   }
// })

// console.log(saleProducts)

// ########################################################################
// Lesson 73 - Reduce Method
// ########################################################################

// const scores = [10, 20, 60, 40, 70, 90, 30]

// Does NOT return a new array. It retruns a value
// it uses an accumulator and current value ()

// const result = scores.reduce((acc, curr) => {
//   if (curr > 50) { // takes current value of array iteration
// acc++ // increments the acc by 1 if true
//   }
//   return acc // returns the accumulator
// }, 0) // Sets the initial value of the accumulator to zero
// console.log(result)

// const scores = [
//   { player: 'mario', score: 50 },
//   { player: 'yoshi', score: 30 },
//   { player: 'mario', score: 70 },
//   { player: 'crystal', score: 60 },
// ]

// const marioScore = scores.reduce((acc, curr) => {
//   if (curr.player === 'mario') {
//     acc += curr.score
//   }
//   return acc
// }, 0)

// console.log(marioScore)

// ########################################################################
// Lesson 74 - Find Method
// ########################################################################

// find returns the first value that meets the criteria in callback then will
// stop iterating the array

// const scores = [10, 5, 0, 40, 30, 10, 90, 70]

// const overFifty = scores.find((score) => score > 50)
// console.log(overFifty)

// ########################################################################
// Lesson 75 - Find Sort
// ########################################################################

// example 1 - sorting strings
// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi']

// names.sort()
// names.reverse()

// console.log(names)

// example 2 - sorting numbers
// const scores = [10, 50, 20, 5, 35, 70, 45]

// scores.sort()
// scores.reverse()
// console.log(scores)

// example 3 - sorting objects
// const players = [
//   { name: 'mario', score: 20 },
//   { name: 'luigi', score: 10 },
//   { name: 'chun-li', score: 50 },
//   { name: 'yoshi', score: 30 },
//   { name: 'shaun', score: 70 },
//   { name: 'James', score: 50 },
// ]

// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1
//   } else if (b.score > a.score) {
//     return 1
//   } else {
//     return 0
//   }
// })

// players.sort((a, b) => b.score - a.score)

// console.log(players.reverse())

// ########################################################################
// Lesson 76 - Chanign Array Methods
// ########################################################################

const products = [
  { name: 'gold star', price: 30 },
  { name: 'green shell', price: 10 },
  { name: 'red shell', price: 40 },
  { name: 'banana skin', price: 5 },
  { name: 'mushroom', price: 50 },
]

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} pounds`)

console.log(promos)
