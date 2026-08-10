const score = 400

const score2 = new Number(600)

console.log(score)
console.log(score2)

console.log(score2.toString().length)
console.log(typeof(score2))

console.log(score2.toFixed(2))

const score3 = 123.88979949
console.log(score3.toPrecision(5))

const score4 = 1000000
console.log(score4.toLocaleString("en-IN"))

// ============= Maths =============

console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(2.3))
console.log(Math.round(2.7))
console.log(Math.floor(2.9))
console.log(Math.ceil(2.1))
console.log(Math.min(2, 3, 4, 5, 6, 7))
console.log(Math.max(2, 3, 4, 5, 6, 7))

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)