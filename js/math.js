const optionOne = document.querySelector("#option1");
const optionTwo = document.querySelector("#option2");
const optionThree = document.querySelector("#option3");
const errorAudio = document.querySelector("#error");
const correctAudio = document.querySelector("#correct");
const points = document.querySelector("#points");

const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");

let answer = 0;
let score = 0;

const changeClass = (event) => {
  let currentClass = document.querySelector(".current");
  currentClass.classList.remove("current");
  event.target.parentElement.classList.add("current");
};

const changeOperator = (event) => {
  switch (event.target.id) {
    case "add":
      document.querySelector("#operator").innerHTML = `+`;
      generateEquation();
      break;
    case "sub":
      document.querySelector("#operator").innerHTML = `-`;
      generateEquation();
      break;
    case "mul":
      document.querySelector("#operator").innerHTML = `x`;
      generateEquation();
      break;
    case "div":
      document.querySelector("#operator").innerHTML = `/`;
      generateEquation();
      break;
  };
};

const generateEquation = () => {
  let multipleNumbers = new Set();
  while (multipleNumbers.size !== 4) {
    multipleNumbers.add(Math.floor(Math.random() * 10));
  };
  const randomNumbers = [...multipleNumbers];

  let firstNumber = randomNumbers[0];
  let secondNumber = randomNumbers[1];
  let wrongAnswerOne = randomNumbers[2];
  let wrongAnswerTwo = randomNumbers[3];

  let allAnswers = [];

  switch (document.querySelector("#operator").innerHTML) {
    case `+`:
      answer = firstNumber + secondNumber;
      break;
    case `-`:
      while (firstNumber < secondNumber) {
        [firstNumber, secondNumber] = [secondNumber, firstNumber];
      };
      answer = firstNumber - secondNumber;
      break;
    case `x`:
      answer = firstNumber * secondNumber;
      answerLength = answer.toString().length;
      if (answerLength >= 2) {
        wrongAnswerOne = Math.floor(Math.random() * (100 - 10) + 10);
        wrongAnswerTwo = Math.floor(Math.random() * (100 - 10) + 10);
      };
      break;
    case `/`:
      answer = firstNumber / secondNumber;
      while (answer % 1 !== 0) {
        firstNumber = Math.floor(Math.random() * 10);
        secondNumber = Math.floor(Math.random() * 10);
        answer = firstNumber / secondNumber;
      };
      break;
  };

  while (answer === wrongAnswerOne || answer === wrongAnswerTwo) {
    wrongAnswerOne = wrongAnswerOne + 1;
    wrongAnswerTwo = wrongAnswerTwo + 1;
  };

  while (wrongAnswerOne === wrongAnswerTwo) {
    wrongAnswerTwo = wrongAnswerTwo + 1;
  };

  document.querySelector("#num1").innerHTML = firstNumber;
  document.querySelector("#num2").innerHTML = secondNumber;

  allAnswers = [answer, wrongAnswerOne, wrongAnswerTwo];
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
  };

  shuffleArray(allAnswers);

  optionOne.innerHTML = allAnswers[0];
  optionTwo.innerHTML = allAnswers[1];
  optionThree.innerHTML = allAnswers[2];
};

const addPoints = (num) => {
  score = score + num;
  points.innerHTML = score;
};

const checkAnswer = (event) => {
  if (event.target.innerHTML == answer) {
    correctAudio.play();
    addPoints(1);
    generateEquation();
  } else {
    errorAudio.play();
    addPoints(-1);
    event.target.classList.add("wrong");
    setTimeout(() => {
      event.target.classList.remove("wrong");
    }, 1000);
  };
};

optionOne.addEventListener("click", checkAnswer);
optionTwo.addEventListener("click", checkAnswer);
optionThree.addEventListener("click", checkAnswer);

add.addEventListener("click", () => {
  changeOperator(window.event)
  changeClass(window.event)
});
sub.addEventListener("click", () => {
  changeOperator(window.event)
  changeClass(window.event)
});
mul.addEventListener("click", () => {
  changeOperator(window.event)
  changeClass(window.event)
});
div.addEventListener("click", () => {
  changeOperator(window.event)
  changeClass(window.event)
});

generateEquation();
