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
      if(result.value === null || result.question === ""){
        displayRandomQuestion();
      } else {
        output.innerHTML = `$${result.value} <br> ${result.question}`;
      }
      console.log(result);
    });
  }).catch(function(error){
   output.innerHTML += error;
  })
}