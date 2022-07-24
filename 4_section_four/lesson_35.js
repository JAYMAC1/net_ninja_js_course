console.log('Section Four - Functions & Methods')

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`)
}

// Standard function
people.forEach(function (person) {
  console.log(person)
})

// Arrow function
people.forEach((person, index) => {
  console.log(index + 1, person)
})

// shortened Arrow function
people.forEach((person) => console.log(person))

people.forEach(logPerson)
