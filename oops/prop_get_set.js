// function property based getter setter

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
    
}

const u1 = new User("axi@gmail.com", "akg")
console.log(u1.email)
console.log(u1.password)