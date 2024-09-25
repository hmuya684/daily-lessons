const quizData = [
  {
      question: "What is the capital of France?",
      answers: [
          { text: "Berlin", correct: false },
          { text: "Madrid", correct: false },
          { text: "Paris", correct: true },
          { text: "Rome", correct: false }
      ]
  },
  {
      question: "Which planet is known as the Red Planet?",
      answers: [
          { text: "Earth", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Venus", correct: false }
      ]
  },
  {
      question: "what is the capital city of kenya?",
      answers: [
          { text: "kenya", correct: false},
          { text: "kisumu", correct: false },
          { text: "Nairobi", correct: true },
          { text: "mombasa", correct: false }
      ]
  },
  {
      question: "Who is the president of kenya?",
      answers: [
          { text: "raira", correct: false },
          { text: "ruto", correct: true },
          { text: "kipchoge", correct: false },
          { text: "henry", correct: false }
      ]
  },
  {
    question: "who is the fastest man alive?",
    answers: [
        { text: "bolt", correct: true},
        { text: "i am", correct: false },
        { text: "kipchoge", correct: true },
        { text: "non of the above", correct: false }
    ]
},
{
    question: "Who is the president of kenya?",
    answers: [
        { text: "raira", correct: false },
        { text: "ruto", correct: true },
        { text: "kipchoge", correct: false },
        { text: "henry", correct: false }
    ]
},
{
  question: "what comes after 99?",
  answers: [
      { text: "98", correct: false},
      { text: "99", correct: false },
      { text: "100", correct: true },
      { text: "33", correct: false }
  ]
},
{
  question: "how many colours are there in a rainbow?",
  answers: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "6", correct: false },
      { text: "0", correct: false }
  ]
},
{
  question: "which of the following is not part of the kenya national flag?",
  answers: [
      { text: "green", correct: false },
      { text: "white", correct: false },
      { text: "black", correct: false},
      { text: "blue", correct: true }
  ]
},
{
  question: "Who killed goliath?",
  answers: [
      { text: "henry", correct: false },
      { text: "david", correct: true },
      { text: "raira", correct: false },
      { text: "soul", correct: false }
  ]
},
];
let currentQuestionIndex = 0;
let score = 0;
// const passMark = 6;
// const highScoreKey = "highScore";


const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');
let highScore = localStorage.getItem(highScoreKey) || 0;
function showQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answersElement.appendChild(button);
    });
}
function resetState() {
  submitButton.style.display = 'block';
  resultElement.textContent = '';
  while (answersElement.firstChild) {
      answersElement.removeChild(answersElement.firstChild);
  }
}

function selectAnswer(button, correct) {
  if (correct) {
      score++;
  }
  button.style.backgroundColor = correct ? 'lightgreen' : 'lightcoral';
  Array.from(answersElement.children).forEach(button => button.disabled = true);
}

function showResult() {
    // const highScore = localStorage.getItem("highScore") || 0;
    // if (score >= passMark){
    //     resultElement.textContent = `Congrats! You passed with a score of ${score}/10!`;
    // }else{
    //     resultElement.textContent = `You failed with a score of ${score}/10. Try Again Later!`;
    // }

    // if (score > highScore){
    //     localStorage.setItem("highScore", score);
    //     resultElement.textContent += `New High score: ${score}/10`;
    // }else{
    //     resultElement.textContent += `High score: ${score}/10`;
    // }

  resultElement.textContent = `You scored ${score} out of ${quizData.length}!`;
  submitButton.textContent = 'Restart Quiz';
  submitButton.addEventListener('click', () => location.reload());
}

submitButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
      showQuestion();
  } else {
      showResult();
  }
});
showQuestion();
// function passMark(){
//   if (number>=7){
//     returnElement.textContent=`you passed${passMark}`;
//   }else{
//     resultElement.textContent=`you did not reach the ${passMark}`
//   }
// }
//  const passmark=7;
//  for( let i=1;i<10;i++){
//    if(result===7){
//      alert(`passed`);
//   }else{
//   alert(`failed`);
//  }
//  };