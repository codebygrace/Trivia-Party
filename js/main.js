const jeopardy = "https://jservice.io/api/random";
const output = document.querySelector('.question');
const newQuestion = document.querySelector('.new-q');
newQuestion.addEventListener('click', displayRandomQuestion);

function displayRandomQuestion(){
  fetch(jeopardy)
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    data.forEach(function(result){
      output.innerHTML = `$${result.value} <br> ${result.question}`;
    });
  }).catch(function(error){
   output.innerHTML += error;
  })
}