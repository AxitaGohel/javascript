const myNum = [5, 6, 7]

// const resultNum = myNum.reduce( function(acc, currval) {
//     console.log(`acc : ${acc}, currval : ${currval}`)
//     return acc + currval
// }, 2)

const resultNum = myNum.reduce( (acc, currval) => acc + currval ,0)

console.log(resultNum)

console.log("----------------------------------------------------------");

const shoppingCart = [
    {
        itemNm : "Js Course",
        price : 2999,
    },
    {
        itemNm : "Python Course",
        price : 999,
    },
    {
        itemNm : "Mobile Dev Course",
        price : 5999,
    },
    {
        itemNm : "Data Science Course",
        price : 12999,
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(priceToPay)