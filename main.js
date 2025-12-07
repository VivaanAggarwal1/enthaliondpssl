// Optional smooth scrolling for the nav pills.
// If you don't have #about, #events, #register yet, nothing breaks.

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".nav-link[data-scroll]");
  links.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetSelector = btn.getAttribute("data-scroll");
      var target = document.querySelector(targetSelector);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
