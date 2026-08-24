// Object

const user = {
    username : "Akshu",
    loginCount : 5,
    signedIn : true,

    getUser : function(){
        console.log("This is User", this.username)
        // console.log(this)
    }
}

console.log(user.username)
console.log(user.getUser())
console.log(this)

// Constractor Function   (everytime give new instance using new keyword.) -----------------------------------

function user1(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    //return this
}

// without 'new' keyword, values are override on previous values.

const userOne = new user1("Axita", 8, true)
const userTwo = new user1("HD", 3, false)
// console.log(userOne)
// console.log(userTwo)
console.log(userOne.constructor)