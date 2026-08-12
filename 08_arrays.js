const myArr = [0,1,2,3,4,5,6]
const veggy = new Array("Potato" , "Tomato", "Onion", "Gralic")

console.log(veggy[1])
console.log(myArr[2])

// myArr.push(10)
// myArr.push(11)

// console.log(myArr)

// myArr.pop()

//myArr.unshift(8)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.includes(2))
console.log(myArr.indexOf(2))

const newArr = myArr.join()
console.log(typeof newArr)
console.log(myArr)

const myNew1 = myArr.slice(2,6)
console.log(myNew1)

const myNew2 = myArr.splice(2,6)
console.log(myNew2)

// ==========================================================

const fruits = ["apple", "banana", "chiku"]
const flowers = ["rose", "merrygold", "lotus"]

// fruits.push(flowers)
// console.log(fruits)

// fruits.concat(flowers)
// console.log(fruits)

const allthings = fruits.concat(flowers)
console.log(allthings)

const all_things = [...fruits, ...flowers]
console.log(all_things)

const new1 = [1, 2, 3, [40, 50, 60], 7, 8, [10, 11 ,[24, 25]]]
const newResult = new1.flat(Infinity)

console.log(newResult)

console.log(Array.isArray("Axita"))
console.log(Array.from("Axita"))
console.log(Array.from({name : "Axita"})) // interesting

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3))
