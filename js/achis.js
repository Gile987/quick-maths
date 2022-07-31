const achisToggle = document.querySelector("#achis");
const achis = document.querySelector(".achis_holder");

showAchis = () => {
  achis.style.display = "block";
};

achisToggle.addEventListener("click", showAchis);