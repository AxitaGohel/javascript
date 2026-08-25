class User{
    constructor(Usernm){
        this.Usernm = Usernm
    }
    
    logMe(){
        console.log(`Username is ${this.Usernm}`)
    }

    static createId(){
        return `123`
    }
}

const u1 = new User("Axitaa")
u1.logMe()
// console.log(u1.createId())

class Teacher extends User{
    constructor(Usernm, email){
        super(Usernm)
        this.email = email
    }
}

const t1 = new Teacher("Teacher", "Teacher@gmail.com")
t1.logMe()
// console.log(t1.createId())

console.log(User.createId())
console.log(Teacher.createId())

