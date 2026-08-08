const myName = "Axita"
const repoCount = 25

console.log(myName + " has " + repoCount + " repos")

console.log(`${myName} has ${repoCount} repos.`)


const gameName = new String("FIFA World Cup")
console.log(gameName.split(" ",2))

console.log(gameName[1])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf("W"))

const newString = gameName.substring(2,8)
console.log(newString)

const anotherString = gameName.slice(2,-2)
console.log("It's answer is  " + anotherString)

const string1 = "     Hello World     "
console.log(string1)
console.log(string1.trim())

const url = "https://axita.com/axita%20gohel"
console.log(url.replace("%20", "-"))
console.log(url.includes("Python"))