function setUsernm(usernm){
    // Complex DB calls
    this.usernm = usernm
    console.log("Called")
}

function createUser(usernm, email, password){
    setUsernm.call(this,usernm)
    this.email = email
    this.password = password
}

const u1 = new createUser("Axita", "Axita@gmail.com", 12345)
console.log(u1)