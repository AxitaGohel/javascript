const start = document.getElementById('start')
const stop = document.getElementById('stop')
const body = document.getElementById('body')

function randomColor(){
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    };
    return color
}
// console.log(randomColor())
let intervalId;

start.addEventListener('click', function(){
    intervalId = setInterval(function(){
        console.log('color changed..');
        document.body.style.backgroundColor = randomColor();
        
    }, 1000);

}, false)

stop.addEventListener('click', function(){
    clearInterval(intervalId)
}, false)