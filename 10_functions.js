function myFunction(){
    console.log("A")
    console.log("X")
    console.log("I")
    console.log("T")
    console.log("A")
}

// myFunction()

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(10,20)

function add(num1 , num2){
    let result = num1 + num2
    return result
}
const result = add(10,20)
// console.log("Result :" ,result);

function loginUserMsg(msg1){            //(msg1 = "Axita") as default value
    if(!msg1){     //if(msg1 === undefined)
        console.log("Please enter a username")
        return
    }
    return `${msg1} just logged in.`
}
// console.log(loginUserMsg())
 
// =============================================================

function calculateCartPrice(val1, val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,3900))

// ====================================================================

const user = {
    username : "Axita",
    price : 250
}

function handleUser(anyObj){
    console.log(`Username is ${anyObj.username} and Price is ${anyObj.price}`)    
}

// handleUser(user)
handleUser({
    username : "Siya",
    price : 500
})

// ========================================================

const myArray = [200, 400, 500, 800]

function getArray(useArray){
    return useArray[2]
}

console.log(getArray(myArray));
console.log(getArray([20, 50, 60, 30]))

