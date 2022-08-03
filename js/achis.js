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
  for (let key in state.points) {
    if (state.score >= key && state.achi[state.points[key]] === false) {
      state.achi[state.points[key]] = true;
      document.querySelector(`#${state.points[key]}`).classList.add("receive_achi");
      localStorage.setItem("achi", JSON.stringify(state.achi));
    };
  };
};

const addPoints = (num) => {
  state.score = state.score + num;
  points.innerHTML = state.score;
  highScore();
  checkAchi();
};

const highScore = () => {
  if (state.score > state.highScore) {
    localStorage.setItem("highScore", state.score);
    state.highScore = state.score;
  };
};

const loadStorage = () => {
  if (localStorage.getItem("highScore")) {
    state.highScore = localStorage.getItem("highScore");
    document.querySelector("#high_score").innerHTML = state.highScore;
  };
  if (localStorage.getItem("achi")) {
    state.achi = JSON.parse(localStorage.getItem("achi"));
    for (let key in state.achi) {
      if (state.achi[key] === true) {
        document.querySelector(`#${key}`).classList.add("receive_achi");
      };
    };
  };
};

const clearClick = () => {
  localStorage.clear();
};
clear.addEventListener("click", clearClick);

loadStorage();
checkAchi();
