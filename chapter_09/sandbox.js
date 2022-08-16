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
