const jeopardy = "https://jservice.io/api/random";
const questionOutput = document.querySelector('.question');
const newQuestion = document.querySelector('.new-q');
const answerButton = document.querySelector('.answer-button');
var answer = "";
var value = "";
var score = "";
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
      console.log(result);
      answer = result.answer;
      value = result.value;
    });
  })
}

function getAnswer(e, displayRandomQuestion){
  e.preventDefault();
  console.log(answer);
  console.log(input);
  if(document.querySelector('.answer-input').value == answer){
    score = score + value;
    questionOutput.innerHTML = `
    Correct!
    <br>
    Score: $${score}`;
    console.log("Correct");
  } else {
    score = score - value;
    questionOutput.innerHTML = `
    Incorrect :(
    <br>
    Score: $${score}`;
    console.log("Incorrect");
  }
 }