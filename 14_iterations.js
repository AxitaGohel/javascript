// for

for(let i = 0; i < 10; i++){
    // const element = i;
    console.log(i)
    
}
console.log("----------------------------------------------------------");

for(let i = 0; i < 10; i++){
    console.log(i)
    if(i == 5){
        console.log("5 is the Best.")
    }
}

console.log("----------------------------------------------------------");

for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log("5 is the Best.")
        break
    }
    console.log(i)
}

console.log("----------------------------------------------------------");

for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log("Number 5 is skip. ")
        continue
    }
    console.log(i)
}

console.log("----------------------------------------------------------");

for(let i = 0; i < 5; i++){
    console.log("Outer Loop =======> ",i)
    for(let j = 0; j < 5; j++){
        // console.log("Inner Loop :",j)
        console.log(i + '*' + j + '=' + i*j)
    }
}

console.log("----------------------------------------------------------");

const array = ['apple', 'banana', 'chiku', 'kiwi', 'coconut']

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

console.log("----------------------------------------------------------");

let index = 0
while (index <= 10) {
    console.log(index)
    index = index + 2
}

console.log("----------------------------------------------------------");

let myArray = ['apple', 'banana', 'chiku', 'kiwi', 'coconut']
let arr = 0
while(arr < myArray.length){
    console.log(myArray[arr])
    arr = arr + 1
}
