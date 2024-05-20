const transButtonArray = [];
transButtonArray.push(
  ...document.querySelectorAll("#options"),
  ...document.querySelectorAll("#priem"),
  ...document.querySelectorAll("#aboutme"),
  ...document.querySelectorAll("#uslugi"),
  ...document.querySelectorAll("#contacti"),
  ...document.querySelectorAll("#blog") //The spread operator (...) is used to take the elements out of the NodeLists returned by document.querySelectorAll and put them directly into transButtonArray
);

transButtonArray.forEach((button) => {
  button.addEventListener("mouseover", mouseOverButton);
  button.addEventListener("mouseout", mouseOutButton);
  button.addEventListener("click", redirectToPage);
});

function mouseOverButton(e) {
  e.target.style.backgroundColor = "transparent";
  e.target.style.color = "#28584e";
}
function mouseOutButton(e) {
  e.target.style.backgroundColor = "#28584e";
  e.target.style.color = "rgb(255, 250, 244)";
}
function redirectToPage(e) {
  switch (e.target.id) {
    case "aboutme":
      window.location.href = "about-me.html";
      break;
    case "uslugi":
      window.location.href = "index.html";
      break;
    case "contacti":
      window.location.href = "index.html";
      break;
    case "blog":
      window.location.href = "index.html";
      break;
  }

  mouseOutButton(e);
}
