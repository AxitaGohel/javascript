// Object Based Get , Set

const User = {
    _email : "Axikg@gmail.com",
    password : "axitakg",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const U1 = Object.create(User)
console.log(U1.email)