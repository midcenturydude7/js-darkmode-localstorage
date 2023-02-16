// PERSISTANT DARKMODE | BUILT WITH HTML, SCSS & JS
const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
// let element = document.body; // select the entire body
let lightMode = localStorage.getItem("light-mode");
let darkMode = localStorage.getItem("dark-mode");

function enableLightMode() {
  theme.classList.add("light-mode-theme"); // replaces darkMode at the :root
  // toggleBtn.classList.remove("light-mode-toggle");
  theme.classList.remove("dark-mode-theme");
  // toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("light-mode", "enabled");
  localStorage.setItem("dark-mode", "disabled");
}

function disableLightMode() {
  theme.classList.remove("light-mode-theme");
  // toggleBtn.classList.add("light-mode-toggle");
  theme.classList.add("dark-mode-theme");
  // toggleBtn.classList.remove("dark-mode-toggle");
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
