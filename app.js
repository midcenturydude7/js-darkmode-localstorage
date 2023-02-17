// PERSISTANT DARKMODE | BUILT WITH HTML, SCSS & JS
const btn = document.getElementById("toggle-btn");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "light") {
  document.body.classList.add("light-mode-theme");
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode-theme");

  let theme = "dark";
  if (document.body.classList.contains("light-mode-theme")) {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
});

console.log(`The current theme is: ${currentTheme}`);
