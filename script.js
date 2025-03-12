document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeBtn = document.querySelector(".toggle-theme");
  toggleThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
