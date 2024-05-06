const contactButton = document.querySelector("#contact");
const lmButton = document.querySelector("#learn-more");
contactButton.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = "transparent";
  e.target.style.color = "#28584e";
});
contactButton.addEventListener("mouseout", function (e) {
  e.target.style.backgroundColor = "#28584e";
  e.target.style.color = "rgb(255, 250, 244)";
});
lmButton.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = "transparent";
  e.target.style.color = "#28584e";
});
lmButton.addEventListener("mouseout", function (e) {
  e.target.style.backgroundColor = "#28584e";
  e.target.style.color = "rgb(255, 250, 244)";
});
