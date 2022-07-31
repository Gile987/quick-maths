const achisToggle = document.querySelector("#achis");
const achis = document.querySelector(".achis_holder");

achisToggle.addEventListener("click", () => {
  achis.classList.toggle("show");
});
