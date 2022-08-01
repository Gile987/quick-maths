const achisToggle = document.querySelector("#achis");
const achis = document.querySelector(".achis_holder");
const points = document.querySelector("#points");
const achiTenPoints = document.querySelector("#ten_points");

let score = 9;

const addPoints = (num) => {
  score = score + num;
  points.innerHTML = score;
  console.log(score);

  switch (score) {
    case 10:
      achiTenPoints.classList.add("receive_achi");
      break;
  }
};

achisToggle.addEventListener("click", () => {
  achis.classList.toggle("show");
});
