let score = 25

//console.log(typeof score) 
//console.log(typeof (score))

let value = "33"
//console.log(typeof value)


let value2 = "33abc"
let value3 = Number(value2)

//console.log(value3)     //NaN => Not a Number


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1 // " " // "Axita"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)  //true


// *******************  Operations  *************************

let simpleValue = 3
let negValue = -simpleValue

// console.log(negValue)  // -3

let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2
// console.log(str3)  // Hello World

// console.log("2" + 3)
// console.log(2 + "3")
// console.log("2" + 3 + 3)
// console.log(2 + 3 + "3")

// console.log((2 + 3) * 5 / 4)

// console.log(+true)
// console.log(+false)
// console.log(+"")

let gameCounter = 100
gameCounter++;
console.log(gameCounter)