const promiseOne = new Promise(function(resolve, reject){      // Promise created
    // do an async task
    // DB calls, network, cryptography

    setTimeout(function(){
        // console.log("async task completed...")
        resolve()
    }, 2000)
    
})

promiseOne.then(function(){                 //Promise Consume , then direct related to "resolve"
    // console.log("Promised Consumed.")
})       

// ---------------------------------------------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
    //    console.log("Async Task 2...")
        resolve()
    },2000)
}).then(function(){
    //console.log("Async Task 2 completed.")
})

// ---------------------------------------------------

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user : "Axita", email : "axita@gmail.com"})
    },2000)
})
promiseThree.then(function(user){
    //console.log(user)
})

// ------------------------------------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({usernm : "Axita", email : "axita@gmail.com"})
        }else{
            reject('ERROR : Something is wrong.')
        }
    }, 1000);
})

promiseFour.then(function(user){
    // console.log(user)
    return user.usernm
}).then(function(usernm){
    // console.log(usernm)
}).catch(function(error){
    // console.log(error)
}).finally(function(){
    // console.log('The promise is either resolved or rejected.')
})

// ------------------------------------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({usernm : "Javascript", email : "js@gamil.com"})
        }else{
            reject('ERROR : Js went Wrong')
        }
    }, 1000)
})

async function consumedPromiseFive(){
    try{
        const response = await promiseFive
        //console.log(response)
    }catch(error){
        //console.log(error)
    }
}

consumedPromiseFive()

// ----------------------------------------------------------

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')
        const data = await response.json()
        // console.log(data)   
    } catch (error) {
        console.log('E : ',error)
    }
}
getAllUsers()
                // OR
fetch('https://jsonplaceholder.typicode.com/users/')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))

// ---------------------------------------------------