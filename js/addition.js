const optionOne = document.querySelector('#option1');
const optionTwo = document.querySelector('#option2');
const optionThree = document.querySelector('#option3');
const errorAudio = document.querySelector('#error');
const correctAudio = document.querySelector('#correct');

let answer =  0;

const generateEquation = () => {
    let firstNumber = Math.floor(Math.random() * 10);
    let secondNumber = Math.floor(Math.random() * 10);
    let wrongAnswerOne = Math.floor(Math.random() * 10);
    let wrongAnswerTwo = Math.floor(Math.random() * 10);
    let allAnswers = [];

    answer = firstNumber + secondNumber;
    document.querySelector('#num1').innerHTML = firstNumber;
    document.querySelector('#num2').innerHTML = secondNumber;

    allAnswers = [answer, wrongAnswerOne, wrongAnswerTwo];
    allAnswers.sort(() => Math.random() - 0.5);

    optionOne.innerHTML = allAnswers[0];
    optionTwo.innerHTML = allAnswers[1];
    optionThree.innerHTML = allAnswers[2];
};

const checkAnswer = (event) => {
    if (event.target.innerHTML == answer) {
        correctAudio.play();
        generateEquation();
    } else {
        errorAudio.pause();
        errorAudio.currentTime = 0;
        errorAudio.play();
    }
}

optionOne.addEventListener('click', checkAnswer);
optionTwo.addEventListener('click', checkAnswer);
optionThree.addEventListener('click', checkAnswer);

generateEquation();