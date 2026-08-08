// Stack (Primitive Datatype) and Heap (Non-Primitive Datatype)

//STACK
let myName = "AxitaGohel"
let otherName = myName

otherName = "Junagadh"

console.log(myName)
console.log(otherName)


//HEAP
let userOne = {
    name : "Axita",
    email : "axita@google.com"
}

let userTwo = userOne

userTwo.email = "akg@google.com"

console.log(userOne.email)
console.log(userTwo.email)