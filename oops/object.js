function multiBy5(num){
    return num*5
}

multiBy5.power = 2

console.log(multiBy5(5))
console.log(multiBy5.power)
console.log(multiBy5.prototype)

// ---------------------------------------------------

function getUser(usernm, age){
    this.usernm = usernm
    this.age = age
}

getUser.prototype.increment = function(){
    this.age++
}

getUser.prototype.printMe = function(){
    console.log("This is PrintMe function...", this.age)
}

const u1 = new getUser("Axita",23)
const u2 = new getUser("Deevu",25)

u1.printMe()
u2.printMe()