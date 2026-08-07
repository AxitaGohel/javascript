// Primitive Datatype 

// 7 Type :
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.25

const isLoggedIn = false
const temp = null

let userId;

const id = Symbol('1225')
const secondId = Symbol('1225')

console.log(id === secondId)

const bigNumber = 1234567890123456789012345678901234567890n


// Non-Primitive Datatype or Reference Datatype

// Array, Object, Function, 

const fruits = ['Apple', 'Banana', 'Mango'];

let myVar = {
    name: 'Axita',
    age: 22,
}

const myFunction = function () {
    console.log('Welcome to Juanagadh')
}

console.log(typeof fruits)
console.log(typeof myVar)
console.log(typeof myFunction)