// PERSISTANT DARKMODE | BUILT WITH HTML, SCSS & JS
const toggleBtn = document.getElementById("toggle-btn");
let element = document.body; // select the entire body
let lightMode = localStorage.getItem("light-mode");

function enableLightMode() {
  element.classList.add("light-mode-theme"); // replaces darkMode at the :root
  toggleBtn.classList.remove("light-mode-toggle");
  localStorage.setItem("light-mode", "enabled");
}

function disableLightMode() {
  element.classList.remove("light-mode-theme");
  toggleBtn.classList.add("light-mode-toggle");
  localStorage.setItem("light-mode", "disabled");
}

if (lightMode === "enabled") {
  enableLightMode(); // set state of lightMode on page load | after it has been selected by user
}

toggleBtn.addEventListener("click", () => {
  lightMode = localStorage.getItem("light-mode"); // Update to LightMode when clicked
  lightMode === "disabled" ? enableLightMode() : disableLightMode();
});
