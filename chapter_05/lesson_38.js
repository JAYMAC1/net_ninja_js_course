// Object Literals

let user = {
  name: 'James',
  age: 49,
  email: 'james@dev.com',
  location: 'Ayrshire',
  blogs: ['Blog 1', 'Blog 2'],
}

// dot notation
console.log(user)
console.log(user.name)
// user.age = 50

console.log(user.age)
console.log(user)

// square bracket notation
console.log(user['name'])
user['name'] = 'Jimmy'
console.log(user['name'])

console.log(typeof user)
