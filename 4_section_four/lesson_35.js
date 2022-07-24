console.log('Section Four - Functions & Methods')

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

people.forEach(function (person) {
  console.log(person)
})

people.forEach((person) => {
  console.log(person)
})

people.forEach((person) => console.log(person))
