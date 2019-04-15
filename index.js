const englishButton = document.getElementById('en');
const spanishButton = document.getElementById('es');
const germanButton = document.getElementById('de');
const russianButton = document.getElementById('ru');
const displayInsult = document.querySelector('.displayInsult');

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
const baseURL = "https://evilinsult.com/generate_insult.php?"
const englishURL = `${corsAnywhere}${baseURL}lang=en&type=json`;
const spanishURL = `${corsAnywhere}${baseURL}lang=es&type=json`;
const russianURL = `${corsAnywhere}${baseURL}lang=ru&type=json`;
const germanURL = `${corsAnywhere}${baseURL}lang=de&type=json`;

function getInsult(language) {
  displayInsult.textContent = "Thinking of an insult...";
  fetch(`${corsAnywhere}${baseURL}lang=${language}&type=json`)
    .then(response => response.json())
    .then(data => {
        let randomInsult = data.insult;
        formattedInsult = randomInsult.replace(/(&quot\;)/g,"\"");
        displayInsult.textContent = formattedInsult;
    })
}

englishButton.addEventListener('click', function() {
  getInsult("en");
})
germanButton.addEventListener('click', function() {
  getInsult("de");
})
spanishButton.addEventListener('click', function() {
  getInsult("es");
})
russianButton.addEventListener('click', function() {
  getInsult("ru");
})
