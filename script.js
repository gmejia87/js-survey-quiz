var countDown = 60;
var startBtn = document.getElementById("start-btn");
var timer = document.querySelector(".timer");
var questions = document.querySelector(".questions");

// //timer on landing page
// timer.textContent = countDown;
// countDown--;

//start button
startBtn.addEventListener("click", startGame);

function startGame() {
  // Start timer
  var tickTock = setInterval(() => {
    timer.textContent = countDown;
    countDown--;

    if (countDown < 0) {
      clearInterval(tickTock);
      // endGame()
    }
  }, 1000);

  timer.classList.remove("hidden");
  questions.classList.remove("hidden");
}

var questions = [
  {
    question: "What is a boolean?",
    choices: ["a string", "multiple choice", "two values"],
    answer: "two values",
  },
  {
    question: "",
  },
];
