function outer(){
    let user = "Axita"
    function inner(){
        console.log(user)
    }
    return inner;
}

const fun = outer();
fun();