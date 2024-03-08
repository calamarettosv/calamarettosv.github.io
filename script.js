function toggleMenu() {
  var menu = document.querySelector(".menu");
  menu.classList.toggle("show");
}

document.addEventListener("click", function (event) {
  var menu = document.querySelector(".menu");
  var menuToggle = document.querySelector(".menu-toggle");

  if (
    !menu.contains(event.target) &&
    !menuToggle.contains(event.target) &&
    menu.classList.contains("show")
  ) {
    menu.classList.remove("show");
  }
});

if (window.location.hostname.match(/^www\./i)) {
  window.location.hostname = window.location.hostname.replace(/^www\./i, "");
}