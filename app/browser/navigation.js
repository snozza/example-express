var nav = document.querySelector("nav.site");
var content = document.querySelector(".content");

function toggleNav() {
  nav.classList.toggle("open");
  content.classList.toggle("navOpen");
}

function closeNav() {
  nav.classList.remove("open");
  content.classList.remove("navOpen");
}

document.querySelector(".navMenuButton").addEventListener("click", toggleNav);
document.querySelector("nav.site .close").addEventListener("click", closeNav);

var selector = "nav a[href='" + document.location.pathname + "']";
//A bit hacky...querySelectorAll nodelist is object that doesn't share array
//protoype methods
[].forEach.call(document.querySelectorAll(selector), function(el) {
  el.classList.add("current");
});

