const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')
    const result2 = document.querySelector('.result2')

    if(height === '' || height <= 0 || isNaN(height))
    {
        result.innerHTML = `Please give valid height : ${height}`
    }else if(weight === '' || weight <= 0 || isNaN(weight))
    {
        result.innerHTML = `Please give valid weight : ${weight}`
    }else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`

        if(bmi < 18.6){
            result2.textContent = "Under Weight";
        }else if(bmi <= 24.9 ){
            result2.textContent = "Normal Range";
        }else{
            result2.textContent = "Over Weight";
        }
    }

    
})