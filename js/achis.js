const achisToggle = document.querySelector("#achis");
const achis = document.querySelector(".achis_holder");
const points = document.querySelector("#points");
const achiTenPoints = document.querySelector("#ten_points");
const achiTwentyPoints = document.querySelector("#twenty_points");
const minusTen = document.querySelector("#minus_ten");

let score = 0;

const addPoints = (num) => {
  score = score + num;
  points.innerHTML = score;

  if (score >= 10) {
    console.log("10 points");
    achiTenPoints.classList.add("receive_achi");
  } if (score >= 20) {
    console.log("20 points");
    achiTwentyPoints.classList.add("receive_achi");
  } if (score <= -10) {
    console.log("Game Over");
    minusTen.classList.add("receive_achi");
  };
  highScore();
};

achisToggle.addEventListener("click", () => {
  achis.classList.toggle("show");
});

const highScore = () => {
  let highScore = localStorage.getItem("highScore");
  if (highScore === null) {
    highScore = 0;
  }
  if (score > highScore) {
    localStorage.setItem("highScore", score);
    highScore = score;
  }
  document.querySelector("#high_score").innerHTML = highScore;
};

highScore();
