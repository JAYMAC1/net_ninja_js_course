// greet() // works because it is hoisted

// //  function declaration - These are hoisted to the top of the code
// function greet() {
//   console.log('Hello')
// }

// // function expression - Not hoisted

// const speak = function () {
//   console.log('Goodbye')
// }

// speak()

// arguments & parameters

// const speak = function (name = 'John', time = 'night') {
//   console.log(`Good ${time}, ${name}`)
// }

// speak('James', 'afternoon')

// returning values

// const calcArea = function (radius) {
// 	return 3.14 * radius ** 2
// }

// const area = calcArea(69)
// console.log(area)

// const calcVol = function (area) {}

// calcVol(area)

// arrow functions

// const calcArea = (radius) => {
//   return 3.14 * radius ** 2
// }

// const area = calcArea(5)
// console.log('area is', area)

const greet = () => {
  return 'Hello, world!'
}

console.log(greet())

const bill = (products, tax) => {
  let total = 0
  for (let i = 0; i < products.length; i++) {
    total += products[i] * tax
  }
  return total
}

console.log(bill([10, 15, 30], 0.2))
