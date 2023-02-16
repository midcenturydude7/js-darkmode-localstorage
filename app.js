// PERSISTANT DARKMODE | BUILT WITH HTML, SCSS & JS
const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
const iconTxt = document.getElementById("icon-text");
let lightMode = localStorage.getItem("light-mode");
let darkMode = localStorage.getItem("dark-mode");

function enableLightMode() {
  theme.classList.add("light-mode-theme"); // replaces darkMode at the :root
  theme.classList.remove("dark-mode-theme");
  iconTxt.classList.replace("fa-brightness-low", "fa-moon");
  localStorage.setItem("light-mode", "enabled");
  localStorage.setItem("dark-mode", "disabled");
}

function disableLightMode() {
  theme.classList.remove("light-mode-theme");
  theme.classList.add("dark-mode-theme");
  iconTxt.classList.replace("fa-moon", "fa-brightness-low");
  localStorage.setItem("light-mode", "disabled");
  localStorage.setItem("dark-mode", "enabled");
}

if (lightMode === "enabled") {
  enableLightMode(); // set state of lightMode on page load | user seleciton is stored and persists
}

toggleBtn.addEventListener("click", () => {
  lightMode = localStorage.getItem("light-mode"); // Update to lightMode when clicked
  lightMode === "disabled" ? enableLightMode() : disableLightMode(); // Checks mode
});
console.log(`Lightmode is: ${lightMode}`);
console.log(`Darkmode is: ${darkMode}`);
