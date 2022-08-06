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
  counter: 0,
  points: {
    10: "ten_points",
    20: "twenty_points",
  },
  achi: {
    ten_points: false,
    twenty_points: false,
    ten_point_combo: false,
    twenty_point_combo: false,
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

  if (num === -1) {
    state.counter = 0;
  } else if (num === 1) {
    state.counter = state.counter + 1;
  };

  if (state.counter === 10) {
    state.achi.ten_point_combo = true;
    document.querySelector("#ten_point_combo").classList.add("receive_achi");
    localStorage.setItem("achi", JSON.stringify(state.achi));
  };

  if (state.counter === 20) {
    state.achi.twenty_point_combo = true;
    document.querySelector("#twenty_point_combo").classList.add("receive_achi");
    localStorage.setItem("achi", JSON.stringify(state.achi));
  };

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
