// No framework, no build step.

// If a company logo file is missing, fall back to the monogram chip.
document.querySelectorAll(".role-logo").forEach(function (img) {
  var fallback = function () {
    img.closest(".role-mark").classList.add("no-logo");
  };
  if (img.complete && img.naturalWidth === 0) fallback();
  img.addEventListener("error", fallback);
});

// Theme toggle. Dark is the default; a saved choice overrides it.
(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  var currentTheme = function () {
    return root.getAttribute("data-theme") || "dark";
  };

  button.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage blocked; the choice just won't persist */
    }
  });
})();
