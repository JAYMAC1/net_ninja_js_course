// Control Flow

// for loop

// for (let i = 0; i < 5; i++) {
//   console.log('in loop:', i)
// }

// console.log('finished looping')

// const names = ['James', 'Mario', 'Luigi']

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i])
// }

// ###########################################################
// while loop

// const names = ['James', 'Mario', 'Luigi']
// let i = 0

// while (i < names.length) {
//   console.log('while', names[i])
//   i++
// }

// ###########################################################
// do while

// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i < 5)

// ###########################################################
// if statements

// const ninjas = ['james', 'mario', 'luigi', 'Jess']

// if (ninjas.length > 3) {
//   console.log("Wow, that's a lot of ninjas")
// }

// const password = 'pass'
// if (password.length >= 8) {
//   console.log('Password is long enough')
// }

// ###########################################################
// Else & Else If

// const password = 'pass'

// if (password.length >= 12) {
//   console.log('Password is super strong')
// } else if (password.length >= 8) {
//   console.log('Password is long enough')
// } else {
//   console.log('Password is too short')
// }

// ###########################################################
// logical operators

// const password = 'password'

// if (password.length >= 12 && password.includes('@')) {
//   console.log('Password is super strong')
// } else if (password.length >= 8 || password.includes('@')) {
//   console.log('Password is strong enough')
// } else {
//   console.log('Password is not long enough')
// }

// logical not

// let user = false
// if (!user) {
//   console.log('User is not logged in')
// }

const scores = [50, 25, 0, 30, 100, 20, 10]
for (let i = 0; i < scores.length; i++) {
  // if (scores[i] === 0) {
  //   continue
  // }

  console.log('your score:', scores[i])
  if (scores[i] === 100) {
    console.log('congrats, you got the high score')
    break
  }
}
