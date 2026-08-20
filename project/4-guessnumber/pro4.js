let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainGuess =  document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let PrevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter valid number.`)
    }else if(guess < 1){
        alert(`Please enter number more than 1.`)
    }
    else if(guess > 100){
        alert(`Please enter number less than 100.`)
    }else{
        PrevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game over. That random number is ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg('You guessed it Right.')
        endGame()

    }else if(guess < randomNumber){
        displayMsg('Guessed number is TOO Low.')

    }else if(guess > randomNumber){
        displayMsg('Guessed number is TOO High.')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remainGuess.innerHTML = `${11 - numGuess}`
}

function displayMsg(msg){
    lowOrHi.innerHTML = `${msg}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disable','')
    p.classList.add('buttton')
    p.innerHTML = '<h2 id="newGame"> Start New Game </h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        PrevGuess = []
        numGuess = 1
        guessSlot.innerHTML =''
        remainGuess.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disable')
        startOver.removeChild(p)
        playGame = true
    }

    )
}
