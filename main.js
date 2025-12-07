// Optional smooth scrolling if you later add sections with IDs.

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-link[data-scroll]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.querySelector(btn.getAttribute("data-scroll"));
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
