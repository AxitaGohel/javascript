// falsy Values => false, 0, -0, "", BigInt 0n, undefined, null, NaN
// Truthly Values => " ", "0", 'false', [], {}, function(){}

const userEmail = "asy"

if(userEmail){
    console.log("User got Email.")
}else{
    console.log("Don't have User Email.")
}

// ====================================================

const userMail = []

if(userMail.length === 0){
    console.log("Array is Empty.")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is Empty.")
}

// ===============================================================

// Nullish Coalescing Operator (??) : null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 25 ?? undefined
val1 =  10 ?? null ?? 20

console.log(val1)

// =======================================================================

// Terniary Operator => condition ? true :false

const iceTea = 100

iceTea <=80 ? console.log("Less than 80") : console.log("More than 80.")