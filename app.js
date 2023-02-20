// PERSISTANT DARKMODE | BUILT WITH HTML, SCSS & JS
// Global DOM Variables
const btn = document.getElementById("toggle-btn");
const iconTxt = document.getElementById("icon-text");

// Theme toggle and storing user preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "light") {
  document.body.classList.add("light-mode-theme");
  iconTxt.classList.toggle("fa-moon");
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode-theme");

  let theme = "dark";
  if (document.body.classList.contains("light-mode-theme")) {
    theme = "light";
  }
  localStorage.setItem("theme", theme);

  if (theme == "light") {
    iconTxt.classList.replace("fa-brightness-low", "fa-moon");
  } else if (theme == "dark" || "") {
    iconTxt.classList.replace("fa-moon", "fa-brightness-low");
  }
});

// Theme check
console.log(`The current theme is: ${currentTheme}`);

// Responsive Menu
const get = (element) => document.getElementById(element);

let open = get("menu-btn");
let navBar = get("navbar-responsive");
let navTitle = get("nav-title");
let exit = get("exit-btn");
let header = get("header");

open.addEventListener("click", () => {
  navBar.classList.add("navbar-responsive-open");
  header.style.height = "15em";
  navTitle.style.display = "none";
  open.style.display = "none";
  exit.style.display = "block";
});

exit.addEventListener("click", () => {
  navBar.classList.replace("navbar-responsive-open", "hideNav");
  header.style.height = "7.6275em";
  navTitle.style.display = "block";
  open.style.display = "block";
  exit.style.display = "none";
});
