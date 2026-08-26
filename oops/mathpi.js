const dec = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(dec)

// const OBJ = Object.create(null)

const Chai = {
    name : "Ginger Chai",
    price : 250,
    isAvailable : true,
    OrderChai : function(){
        console.log(`Chai is not Available...`)
    }
}

console.log(Chai)
console.log(Object.getOwnPropertyDescriptor(Chai,"name"))

Object.defineProperty(Chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(Chai,"name"))

for(let [key, value] of Object.entries(Chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
    
}