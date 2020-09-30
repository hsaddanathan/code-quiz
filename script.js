console.log("Hello World!");

var timerScore = document.getElementById("timer");
var mainScreen = document.getElementById("main-screen");
var startButton = document.getElementById("start-quiz");
var questionSection = document.getElementById("questions-section");
var answerChoices = document.getElementById("answers-section");
var completionPage = document.getElementById("completion-page");

var timeRemaining = 75;
var interval;
var questionIndex = 0;

var questionArray = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets",
    ],
    answer: "3. parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    answer: "3. quotes",
  },
  {
    question:
      "A very useful  tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
];
var answerValidation;
var finalScore;

completionPage.style.display = "none";

function startTimer() {
  timerScore.text = "Time: " + timeRemaining;
  interval = setInterval(function () {
    timeRemaining--;
    timerScore.textContent = "Time: " + timeRemaining;

    finalScore = timeRemaining;
    if (timeRemaining === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

function startQuiz() {
  // Hides landing page text and button
  mainScreen.style.display = "none";
  startTimer();
  presentQuestions(questionIndex);
}
function presentQuestions(index) {
  if (index === questionArray.length) {
    //    Ends Game and Presents Score Screen
    clearInterval(interval);
    presentScoreScreen();
  } else {
    // Clears Answer section before each question
    answerChoices.innerHTML = "";
    questionSection.textContent = questionArray[index].question;

    console.log(questionSection.textContent);

    for (var i = 0; i < questionArray[index].choices.length; i++) {
      var answerBttns = document.createElement("button");

      answerBttns.textContent = questionArray[index].choices[i];

      answerBttns.setAttribute("class", "btn btn-primary rounded");
      answerBttns.setAttribute("data-index", i);

      answerChoices.appendChild(answerBttns);
    }function presentQuestions(index) {
        if (index === questionArray.length) {
          //    Ends Game and Presents Score Screen
          clearInterval(interval);
          presentScoreScreen();
        } else {
          // Clears Answer section before each question
          answerChoices.innerHTML = "";
          questionSection.textContent = questionArray[index].question;
      
          console.log(questionSection.textContent);
      
          for (var i = 0; i < questionArray[index].choices.length; i++) {
            var answerBttns = document.createElement("button");
      
            answerBttns.textContent = questionArray[index].choices[i];
      
            answerBttns.setAttribute("class", "btn btn-primary rounded");
            answerBttns.setAttribute("data-index", i);
      
            answerChoices.appendChild(answerBttns);
          }
        }
      }
      function checkAnswer(event){
          var answerIndex = event.target.getAttribute("data-index");
          event.preventDefault();
          
          if(event.target.matches("button") && 
          questionArray[questionIndex].choices[answerIndex] === questionArray[questionIndex].answer){
              answerValidation = "Correct!";
              console.log(answerValidation);
              questionIndex++;
              presentQuestions(questionIndex);
          }
          else{
              answerValidation = "Wrong";
              console.log(answerValidation);
              timeRemaining -=15;
              questionIndex++;
              presentQuestions(questionIndex);
          }
      }
  }
}
function checkAnswer(event) {
  var answerIndex = event.target.getAttribute("data-index");
  event.preventDefault();

  if (
    event.target.matches("button") &&
    questionArray[questionIndex].choices[answerIndex] ===
      questionArray[questionIndex].answer
  ) {
    answerValidation = "Correct!";
    console.log(answerValidation);
    questionIndex++;
    presentQuestions(questionIndex);
  } else {
    answerValidation = "Wrong";
    console.log(answerValidation);
    timeRemaining -= 10;
    questionIndex++;
    presentQuestions(questionIndex);
  }
}
function presentScoreScreen(){
    var qaContainer = document.getElementById("qa-container");
    qaContainer.innerHTML = "";
    completionPage.style.display = "block";

    var score = document.getElementById("final-score");
    score.textContent = "Your final score is " + finalScore
}
// Event Listeners
startButton.addEventListener("click", startQuiz);
answerChoices.addEventListener("click", checkAnswer);
