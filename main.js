var btn = document.getElementById("menuBtn");
var nav = document.getElementById("navLinks");

btn.addEventListener("click", function () {
  var open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }
});