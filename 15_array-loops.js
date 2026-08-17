const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i);
}

console.log("----------------------------------------------------------");

const gt = "Hello World"
for (const i of gt){
    console.log(i)
}

console.log("----------------------------------------------------------");

const gt1 = "Hello World"
for (const i of gt){
    if (i == " ") {
        break
    }
    console.log(i)
}

console.log("----------------------------------------------------------");

const gt2 = "Hello World"
for (const i of gt){
    if (i == " ") {
        continue
    }
    console.log(i)
}
