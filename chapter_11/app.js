/*
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
*/

// timestamps

const before = new Date('February 1 2019 7:30:59')
const now = new Date()

const diff = now.getTime() - before.getTime()
console.log(diff)

const mins = Math.round(diff / 1000 / 60)
const hours = Math.round(mins / 60)
const days = Math.round(hours / 24)
const months = Math.floor(days / 365)
const years = Math.floor(days / 365)

console.log(`the blog was written ${years} years ago`)
console.log(mins)
console.log(hours)
console.log(days)
console.log(years)

// converting timestamps into date objects
const timestamp = 1675938474990
console.log(new Date(timestamp))
