const transButtonArray = [];
transButtonArray.push(
  document.querySelector("#contact"),
  document.querySelector("#learn-more"),
  document.querySelector("#contacti"),
  document.querySelector("#aboutme"),
  document.querySelector("#uslugi"),
  document.querySelector("#blog")
);

transButtonArray.forEach((button) => {
  button.addEventListener("mouseover", mouseOverButton);
  button.addEventListener("mouseout", mouseOutButton);
});

function mouseOverButton(e) {
  e.target.style.backgroundColor = "rgb(255, 250, 244)";
  e.target.style.color = "#28584e";
}
function mouseOutButton(e) {
  e.target.style.backgroundColor = "#28584e";
  e.target.style.color = "rgb(255, 250, 244)";
}
