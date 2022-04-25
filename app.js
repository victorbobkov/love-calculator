const firstName = document.querySelector('#input1')
const secondName = document.querySelector('#input2')
const button = document.querySelector('button')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': 'c6a141eb82msh91076cc2f8ad375p1b2981jsn0a076c3994fe'
    }
}

function getResult() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${firstName.value}&fname=${secondName.value}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
}

button.addEventListener('click', getResult)
