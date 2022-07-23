const optionOne = document.querySelector("#option1");
const optionTwo = document.querySelector("#option2");
const optionThree = document.querySelector("#option3");
const errorAudio = document.querySelector("#error");
const correctAudio = document.querySelector("#correct");

let answer = 0;

const generateEquation = () => {
  let randomNumbers = generateMultipleNumbers(4);

  let firstNumber = randomNumbers[0];
  let secondNumber = randomNumbers[1];
  let wrongAnswerOne = randomNumbers[2];
  let wrongAnswerTwo = randomNumbers[3];
  let allAnswers = [];

  answer = firstNumber + secondNumber;

  if (document.URL.includes("subtract")) {
    answer = firstNumber - secondNumber;
    console.log("subtraction");
    // comment out the following if statement if you want the result to sometimes be a negative number
    if (firstNumber < secondNumber) {
      let temp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = temp;
      answer = firstNumber - secondNumber;
    };
  };

  while (wrongAnswerOne === answer || wrongAnswerTwo === answer ) {
    wrongAnswerOne = Math.floor(Math.random() * 10);
    wrongAnswerTwo = Math.floor(Math.random() * 10);
  };

  document.querySelector("#num1").innerHTML = firstNumber;
  document.querySelector("#num2").innerHTML = secondNumber;

  allAnswers = [answer, wrongAnswerOne, wrongAnswerTwo];
  allAnswers.sort(() => Math.random() >= 0.5);

  optionOne.innerHTML = allAnswers[0];
  optionTwo.innerHTML = allAnswers[1];
  optionThree.innerHTML = allAnswers[2];
};

const checkAnswer = (event) => {
  if (event.target.innerHTML == answer) {
    correctAudio.pause();
    correctAudio.currentTime = 0;
    correctAudio.play();
    generateEquation();
  } else {
    errorAudio.pause();
    errorAudio.currentTime = 0;
    errorAudio.play();
  }
};

optionOne.addEventListener("click", checkAnswer);
optionTwo.addEventListener("click", checkAnswer);
optionThree.addEventListener("click", checkAnswer);

generateEquation();
