/*
class User {
    constructor(unm, email, password){
        this.unm = unm
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.unm.toUpperCase()}`
    }
}

const u1 = new User("Axita", "Axita@gmail.com", 123)

console.log(u1)
console.log(u1.encryptPassword())
console.log(u1.changeUsername())
*/

// Behind the scene

function User(unm, email, password){
    this.unm = unm
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.unm.toUpperCase()}`
}

const u1 = new User("Axita", "Axita@gmail.com", 123)

console.log(u1)
console.log(u1.encryptPassword())
console.log(u1.changeUsername())


