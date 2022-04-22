const jeopardy = "https://jservice.io/api/random";
const questionOutput = document.querySelector('.question');
const newQuestion = document.querySelector('.new-q');
const answerButton = document.querySelector('.answer-button');
var answer = "";
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
    });
  })
}

function getAnswer(){
  console.log(answer);
  console.log(document.querySelector('.answer-input').value);
  if (document.querySelector('.answer-input').value === answer){
    console.log("Correct");
  } else {
    console.log("Try Again");
  }
}
