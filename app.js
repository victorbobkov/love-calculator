const firstName = document.querySelector('#input1')
const secondName = document.querySelector('#input2')
const button = document.querySelector('button')

let printResultText = document.querySelector('#print')
let printPercentage = document.querySelector('#statement')

const options = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
      'X-RapidAPI-Key': 'c6a141eb82msh91076cc2f8ad375p1b2981jsn0a076c3994fe'
   }
}

async function calculateLove() {
   const apiUrl = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${secondName.value}&fname=${firstName.value}`
   let response = await fetch(apiUrl, options)

   try {
      const resultObject = await response.json()
      console.log(resultObject)
      if (resultObject.fname === '' || resultObject.sname === '') {
         printResultText.textContent = 'Please enter valid name'
      } else {
         printResultText.textContent = resultObject.result
         printPercentage.textContent = `Your Match Score ${resultObject.percentage}%`
      }
   } catch (e) {
      console.log('Error:', e)
   }
}

button.addEventListener('click', calculateLove)
