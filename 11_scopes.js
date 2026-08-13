var c = 300
let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30

    console.log(`Inside Local : ${a}`)
}

console.log(`Outside global : ${a}`)       // not display because its scope is over out of {} 
// console.log(b)       //  " "
console.log(c)

// ===================================================

function one(){

    const usernm = "Axita"

    function two(){
        const website = "JSvideos"
        console.log("Inner Function :",usernm)
    }
    // console.log("Outer Function :", website)

   // two()
}
//one()

// ================================================================

if(true){
    
    const usernm = "Akshu"

    if(usernm === "Akshu"){
        const webst = " PHPVideos"
        console.log(usernm + webst);
    }

    //console.log(webst);
}

// ===============================================================

// 1. normal function

console.log(addone(5))
function addone(num){
    return num + 1
}
// console.log(addone(5))



// 2. expression function
// console.log(addtwo(5))       // it gives error because of its place 
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))
