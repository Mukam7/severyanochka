var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");
menuButton.addEventListener("click", function () {
  menu.classList.toggle("show");
});

// modal js

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
