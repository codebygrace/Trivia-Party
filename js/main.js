// VARIABLE DECLARATION
const jeopardy = "https://jservice.io/api/random";
const newQuestion = document.querySelector('.new-q');
const questionOutput = document.querySelector('.question');
const answerButton = document.querySelector('.answer-button');
const finishBtn = document.querySelector('.finish');
const scoreValue = document.querySelector('.score-value');

var answer = "";
var value = "";
var score = 0;
var input = document.querySelector('.answer-input').value;

// EVENT LISTENERS
newQuestion.addEventListener('click', displayRandomQuestion);
answerButton.addEventListener('click', getAnswer);
finishBtn.addEventListener('click', finishGame);

// FETCH API & OUTPUT CATEGORY, VALUE, AND QUESTION ON 'RANDOM QUESTION' BTN PRESS
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

// COLLECT USER INPUT FROM ANSWER FIELD AND UPDATE SCORE
function getAnswer(event){
  event.preventDefault();
  if(document.querySelector('.answer-input').value.toLowerCase() == answer.toLowerCase()){
    score = score + value;
    questionOutput.innerHTML = `
    Correct!`;
    scoreValue.innerHTML = `$${score}`;
    console.log("Correct");
  } else {
    score = score - value;
    questionOutput.innerHTML = `
    Incorrect :(`;
    scoreValue.innerHTML = `$${score}`;
    console.log("Incorrect");
  }
  finalScore = score;
}

// END GAME AND OUTPUT FINAL SCORE
function finishGame() {
  score = finalScore;
  questionOutput.innerHTML = `Game Over
  <br>
  Final Score: $${score}
  <br>
  Refresh to Play Again`;
  console.log("DONE");
 }