// two type declaration 
// 1. object literals
// 2. object constructor -> singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Axita",
    [mySym] : "myKey1",
    age : "22",
    location : "Junagadh",
    email : "axita12@gmail.com",
    isLoggedIn : "False",
    lastLoginDay : ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser.mySym)

jsUser.location = "Baroda"
// Object.freeze(jsUser)
jsUser.location = "Ahmdabad"

//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


//===============================================

const tinderUser = new Object()
const tinderUser1 = {}

console.log(tinderUser)
console.log(tinderUser1)

tinderUser.id = "12abc"
tinderUser.name = "Priya"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regUser = {
    email : "axita@google.com",
    fullname : {
        userName : {
            firstNm : "Axita",
            lastNm : "Gohel"
        }
    } 
}
// console.log(regUser)
// console.log(regUser.fullname)
// console.log(regUser.fullname.userName)


const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3)

const User = [
    {
        id : 1,
        email : "a@google.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    }
]

// console.log(User[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("names"))

// =============================================

const course = {
    courseNm : "JavaScript",
    price : "999",
    courseInstructor : "Axita"
}

// course.courseInstructor

const {courseInstructor : instructor} = course
console.log(instructor)