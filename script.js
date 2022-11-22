var countDown = 30;
var startBtn = document.getElementById("start-btn");
var timer = document.querySelector(".timer");
var questions = document.querySelector(".questions");
var listChoices = document.querySelector(".questions button");

var count = 0;
var pageContentEl = function (element) {
  return document.querySelector(element);
};

// //timer on landing page
// timer.textContent = countDown;
// countDown--;

//start button to quiz
startBtn.addEventListener("click", startGame);

//start quiz
function startGame() {
  // Start timer
  var tickTock = setInterval(() => {
    timer.textContent = `Time left: ${countDown}`;
    countDown--;

    if (countDown < 0) {
      clearInterval(tickTock);
      timer.textContent = "Time is up!";
      // endGame()
    }
  }, 1000);

  timer.classList.remove("hidden");
  questions.classList.remove("hidden");
  showQuestions();
}

//show questions on screen
const showQuestions = function () {
  pageContentEl(".question").innerHTML = quizQuestions[count].question;
  pageContentEl(".btn1").innerHTML = `1: ${quizQuestions[count].choices[0]}`;
  pageContentEl(".btn2").innerHTML = `2: ${quizQuestions[count].choices[1]}`;
  pageContentEl(".btn3").innerHTML = `3: ${quizQuestions[count].choices[2]}`;
};

//questions for quiz
var quizQuestions = [
  {
    question: "JavaScript is a __ side scripting language.",
    choices: ["server", "browser", "none of the above"],
    answer: "browser",
  },
  {
    question: "Which choice is not a common JavaScript Data Type?",
    choices: ["strings", "booleans", "alerts"],
    answer: "alerts",
  },
  {
    question:
      "String values must be enclosed within __ when being assigned to variables.",
    choices: ["quotes", "curly brackets", "parentheses"],
    answer: "quotes",
  },
];
