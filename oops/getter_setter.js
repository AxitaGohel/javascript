class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return `${this.__email.toUpperCase()}`
    }
    set email(value){
        this.__email = value
    }

    get password(){
        return `${this.__password.toUpperCase()}kgohel`
    }
    set password(value){
        this.__password = value
    }

}

const obj1 = new User("User@gmail.com", "axita")
console.log(obj1.password)
console.log(obj1.email)