

const advice = document.querySelector('h1')
const title = document.querySelector('h4')


//  Apı call

const randomApi = 'https://api.adviceslip.com/advice';

fetch(randomApi)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let randomAdvice = data.slip.advice;
        let randomTittle = data.slip.id;
        title.textContent = `ADVICE #${randomTittle}`
        advice.textContent = randomAdvice
    })

    .catch(error => {
        console.error('Hata:', error);
    });


function reflesh() {
    location.reload();
}


