const myDate = new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(typeof(myDate))

const myDate1 = new Date(2026, 3, 25)
console.log(myDate1.toLocaleString())
console.log(myDate1.toDateString())

const myDate2 = new Date(2025, 11, 25, 12, 25)
console.log(myDate2.toLocaleString())

const myDate3 = new Date("2003-12-10")
console.log(myDate3.toLocaleString())

const myDate4 = new Date("12-26-2003")
console.log(myDate4.toLocaleString())

const myDate5 = Date.now()
console.log(myDate5)
console.log(myDate4.getTime())

console.log(Math.floor(Date.now()/1000))

const newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDate())
console.log(newDate)

// stringinterpolation = ` `

// `${newDate.getDate()} and other. ` 

newDate.toLocaleString('dafualt', {
    weekday: "long"
})