console.log("------------------------- for of -----------------------------");


const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")
console.log(map)

for(const i of map){
    console.log("for of",i)
}
for(const [key, value] of map){
    // console.log(key)
    console.log(key + ' :-- ' + value)
}

console.log("------------------------- for in---------------------------------");

const myObj = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}

for (const i in myObj) {
    console.log(i)
}
for (const key in myObj) {
    console.log(key + " shortcut is for " + myObj[key])
}

console.log("----------------------------------------------------------");

const obj2 = ['py', 'js', 'rb', 'java', 'cpp']

for (const key in obj2) {
    console.log(key)
    console.log(obj2[key])
}

console.log("-----------------------  for each  ------------------------------");

const coding = ["Python", "CPP", "Java", "JavaScript", "Ruby"]

coding.forEach(function(val){
    console.log("Normal Function",val)
})

coding.forEach((item) => {
    console.log("Arrow Function",item)
})

console.log("----------------------------------------------------------");

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

console.log("----------------------------------------------------------");

const myCoding = [
    {
        langName : 'JavaScript',
        langFile : 'js'
    },
    {
        langName : 'Python',
        langFile : 'py'
    },
    {
        langName : 'HTML',
        langFile : 'html'
    },
    {
        langName : 'CSS',
        langFile : 'css'
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})

console.log("----------------------------------------------------------");

const code = ["js", "ruby", "java", "python", "cpp"]

const val = code.forEach( (item) => {
    // console.log(item)
    return item
})

console.log(val)
