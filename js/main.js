const jeopardy = "https://jservice.io/api/random";
const newQuestion = document.querySelector('.new-q');
const questionOutput = document.querySelector('.question');
const answerButton = document.querySelector('.answer-button');
var answer = "";
var value = "";
var score = 0;
var input = document.querySelector('.answer-input').value;
newQuestion.addEventListener('click', displayRandomQuestion);
answerButton.addEventListener('click', getAnswer);

function displayRandomQuestion(){
  fetch(jeopardy)
  .then(function(res){
    return res.json();
  }).then(function(data){
    data.forEach(function(result){
      if(result.value === null || result.question === ""){
        displayRandomQuestion();
      } else {
        questionOutput.innerHTML = `Category: "${result.category.title}"
        <br>
        $${result.value} 
        <br>
        ${result.question}`;
      }
      console.log(result.answer);
      answer = result.answer;
      value = result.value;
    });
  })
}

function getAnswer(event){
  event.preventDefault();
  if(document.querySelector('.answer-input').value == answer){
    score = score + value;
    questionOutput.innerHTML = `
    Correct!`;
    document.querySelector('.score-value').innerHTML = `$${score}`;
    console.log("Correct");
  } else {
    score = score - value;
    questionOutput.innerHTML = `
    Incorrect :(`;
    document.querySelector('.score-value').innerHTML = `$${score}`;
    console.log("Incorrect");
  }
 }