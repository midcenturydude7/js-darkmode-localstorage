// PERSISTANT DARKMODE | BUILT WITH HTML, SCSS & JS
const toggleBtn = document.getElementById("toggle-btn");
let element = document.body;
let lightMode = localStorage.getItem("light-mode");

function enableLightMode() {
  element.classList.add("light-mode-theme");
  toggleBtn.classList.remove("light-mode-toggle");
  localStorage.setItem("light-mode", "enabled");
}

function disableLightMode() {
  element.classList.remove("light-mode-theme");
  toggleBtn.classList.add("light-mode-toggle");
  localStorage.setItem("light-mode", "disabled");
}

if (lightMode === "enabled") {
  enableLightMode();
}

toggleBtn.addEventListener("click", () => {
  lightMode = localStorage.getItem("light-mode"); // Update to LightMode when clicked
  if (lightMode === "disabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
