// Array -> constructor function -> has .prototype ✅
// Object -> constructor function -> has .prototype ✅

// arr = [] -> instance -> no .prototype ❌
// obj = {} -> instance -> no .prototype ❌

// arr.__proto__ -> Array.prototype ✅
// obj.__proto__ -> Object.prototype ✅

// ====================================

// console.log(typeof Array); // function
// console.log(typeof Object); // function

// const arr = [];
// const obj = {};

// console.log(arr.prototype); // undefined
// console.log(obj.prototype); // undefined

// console.log(arr.__proto__ === Array.prototype); // true
// console.log(obj.__proto__ === Object.prototype); // true

// ==========================================================

// const arr = new Array(1, 2, 3);          // Array Constructor
// const arr = [1, 2, 3];                   // Array Literal

// =========================================================

// [1, 2, 3] // Array literal ✅ Recommended
// new Array(1, 2, 3) // Constructor form ✅ Works
// [5] // One element: 5
// new Array(5) // Length 5, empty slots ⚠️

// ==========================================================

const Arr1 = ["Banana", "Apple", "Chiku"]

const Obj1 = {
    usernm : "Axita",
    age : 23,
    getAge : function(){
        console.log(`Age of Axita is ${this.usernm}`)
    }
}

// ------------------ function & class --> has prototype
// ----------------- object & Array instance --> has no prototype

// Arr1.prototype.axita = function(){
//     console.log(`Axita is present in Array`)
// }

// Obj1.prototype.axita = function(){
//     console.log(`Axita is present in Object`)
// }

// Array.prototype.axi = function(){
//     console.log(`Axita is present in all Array`)
// }

Object.prototype.axi = function(){
    console.log(`Axita is present in all Object`)
}

Obj1.axi()
Arr1.axi()

// --------------------------------------------------------------------

console.log(typeof Array)       // function / constructor function
console.log(typeof Object)      // function / constructor function




/* Inheritance */ 

const User = {
    name : "AKG",
    email : "akg@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment ',
    fulltime : true,
    __proto__ : TeachingSupport         //inner access
}

Teacher.__proto__ = User                // outer access


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let user1 = "  Axita     "

String.prototype.trueLength = function(){
    console.log(this)          // direct value -> Print the actual value.
    console.log(`${this}`)     // template literal -> converts the number/value to a string first, then print it.
    console.log(`True Length of ${this.trim().length}`)
}

user1.trueLength()
"A X I T A".trueLength()