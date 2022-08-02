const achisToggle = document.querySelector("#achis");
const achis = document.querySelector(".achis_holder");
const points = document.querySelector("#points");
const achiTenPoints = document.querySelector("#ten_points");
const achiTwentyPoints = document.querySelector("#twenty_points");
const minusTen = document.querySelector("#minus_ten");
const clear = document.querySelector("#clear");

let score = 0;

achisToggle.addEventListener("click", () => {
  achis.classList.toggle("show");
});

const state = {
  score: 0,
  highScore: 0,
  points: {
    10: "ten_points",
    20: "twenty_points",
  },
  achi: {
    ten_points: false,
    twenty_points: false,
  },
};

const checkAchi = () => {
  const { score, points, achi } = state;
  Object.keys(points).forEach((key) => {
    console.log(localStorage)
    const achiStatus = localStorage.getItem(points[key]);
    if (achiStatus === null) {
      achi[points[key]] = false;
    } else {
      achi[points[key]] = achiStatus;
    };
    if (score >= key) {
      achi[points[key]] = true;
    };
    if (achi[points[key]]) {
      document.querySelector(`#${points[key]}`).classList.add("receive_achi");
      localStorage.setItem(points[key], true);
    };
  });
};

const addPoints = (num) => {
  state.score = state.score + num;
  points.innerHTML = state.score;
  highScore();
  checkAchi();
};

const highScore = () => {
  state.highScore = localStorage.getItem("highScore");
  if (state.score > state.highScore) {
    localStorage.setItem("highScore", state.score);
    state.highScore = state.score;
  }
  document.querySelector("#high_score").innerHTML = state.highScore;
};

const clearClick = () => {
  localStorage.clear();
};
clear.addEventListener("click", clearClick);

highScore();
checkAchi();
