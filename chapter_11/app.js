// Dates & times

const now = new Date()

console.log(now)
console.log(typeof now)

//  years, months days, times

console.log('getFullYear:', now.getFullYear())
console.log('getMonth:', now.getMonth())
console.log('getDate:', now.getDate())
console.log('getDay:', now.getDay())
console.log('getHours', now.getHours())
console.log('getMinutes', now.getMinutes())
console.log('getSeconds', now.getSeconds())

// Timestamps
console.log('timestamp', now.getTime())

//  data strings
console.log(now.toDateString(0))
console.log(now.toTimeString(0))
console.log(now.toLocaleString(0))
