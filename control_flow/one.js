// if 

const userLoggedIn = true
const temp = 41

if(temp <= 45){
    console.log("Temperature is less than 45")
}else{
    console.log("Temperature is equal to or greater than 45")
}

console.log("Must Execute...")

// ===========================================================================

const score = 200

if(score < 300){
    let power = "fly"           //var
    console.log(`User power : ${power}`)
}
//console.log(`User power : ${power}`)


// ============================================================================

const balance = 500

if(balance > 300) console.log("Test"), console.log("Test2");

// ================================================================================

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard){
    console.log("Allow to Buy...")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In... ")
}
