class User{
    constructor(Usernm){
        this.Usernm = Usernm
    }
    
    logMe(){
        console.log(`Username is ${this.Usernm}`)
    }
}
const u1 = new User("Axita")
console.log(u1)
u1.logMe()

class Teacher extends User{
    constructor(Usernm,email, password){
        super(Usernm)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`Course was added by ${this.Usernm}`)
    }
}

const t1 = new Teacher("Tea", "Teacher@gmail.com", "abc")
t1.addCourse()
t1.logMe()

console.log(u1 === User)
console.log(u1 == User)
console.log(u1 instanceof User)
