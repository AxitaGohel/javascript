const user = {
    name : "Axita",
    price : 120,
    wcmsg : function(){
        console.log(`${this.name}, welcome to site.`)  
        console.log(this);
        
    }
}

// user.wcmsg()

// user.name = "Bhumi"
// user.wcmsg()

console.log(this);

// ======================================================================

function one(){                 // normal function
    //console.log(this)
    const val1 = "Axita"
    console.log(this.val1)
}
one()

const two = function(){         // expression function
    const val1 = "Axita"
    console.log(this.val1)
}
two()

const three = () => {           // arrow function
    const val1 = "Axita"
    console.log(this)
}
three()

// =============================================================

/*
function() {                                    () => {

}                                               }

const fun1 = function(){                        const fun1 = () => {

}                                               }

const fun1 = function(num1, num2){              const fun1 = (num1, num2) => {

}                                               }

*/ 

const fun1 = (num1, num2) => {                  // need "return" with { }
    return num1 + num2                          // explicite return
}
console.log(fun1(5,2))

const fun2 = (num1, num2) => num1 + num2        // implicite return
console.log(fun2(5,3))

const fun3 = (num1, num2) => (num1 + num2)        // not need "return" with ( )
console.log(fun3(5,4))

const fun4 = (num1, num2) => ({usernm : "Axita"})
console.log(fun4(5,5)) 