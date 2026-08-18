const myNum = [1, 2, 3, 4, 5, 6, 7 ,8, 9]

const res = myNum.filter( (num) => num > 4 )

console.log(res)

console.log("----------------------------------------------------------");

const newNum = []

myNum.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum)

console.log("----------------------------------------------------------");

const books = [
    {
        title: 'The Silent River',
        genre: 'Fiction',
        publish: 1985,
        edition: 2005
    },
    {
        title: 'World of Science',
        genre: 'Science',
        publish: 1991,
        edition: 2010
    },
    {
        title: 'Indian History',
        genre: 'History',
        publish: 1998,
        edition: 2008
    },
    {
        title: 'Modern Life',
        genre: 'Non-Fiction',
        publish: 1989,
        edition: 2012
    },
    {
        title: 'Space Journey',
        genre: 'Science',
        publish: 2003,
        edition: 2015
    },
    {
        title: 'The Lost Kingdom',
        genre: 'Fiction',
        publish: 1987,
        edition: 2009
    },
    {
        title: 'Ancient India',
        genre: 'History',
        publish: 1995,
        edition: 2011
    },
    {
        title: 'Learning JavaScript',
        genre: 'Technology',
        publish: 2006,
        edition: 2020
    },
    {
        title: 'The Digital World',
        genre: 'Technology',
        publish: 2012,
        edition: 2022
    },
    {
        title: 'Life and People',
        genre: 'Non-Fiction',
        publish: 2000,
        edition: 2018
    }
]

let bookresult = books.filter( (bk) => bk.genre === 'Technology')
bookresult = books.filter( (bk) => bk.publish >= 2000)
bookresult = books.filter( (bk) => bk.edition >= 2010 && bk.genre === "Non-Fiction")

console.log(bookresult)

console.log("----------------------------------------------------------");

const num1 = [1, 2, 3, 4, 5, 6, 7, 8]

const numMapResult = num1.map( (n1) => n1 + 100)
console.log(numMapResult)

const numFilResult = num1.filter( (n1) => n1 + 100)
console.log(numFilResult)

const numResult = num1
                    .map( (n1) => n1 * 10)
                    .map( (n1) => n1 + 1)
                    .filter( (n1) => n1 >= 50)
console.log(numResult)

