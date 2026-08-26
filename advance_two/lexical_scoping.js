function outer(){
    let user = "Akshy"

    function inner(){
        let inUser = "Gohel"
        console.log("Inner One :", user)
        
    }

    function innerTwo(){
        console.log("Inner Two :", user)
        // console.log("Inner Two : ", inUser)
    }
    inner()
    innerTwo()
}
// console.log("Outer Too : ", user)
outer()