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
let themeBtn = get("toggle-btn");
let main = get("main");
let footer = get("footer");

open.addEventListener("click", () => {
  navBar.classList.add("navbar-responsive-open");
  header.style.background = "transparent";
  header.style.borderBottom = "none";
  navTitle.style.display = "none";
  open.style.display = "none";
  exit.style.display = "block";
  themeBtn.style.display = "none";
  main.style.display = "none";
  // footer.style.display = "none";
});

exit.addEventListener("click", () => {
  navBar.classList.remove("navbar-responsive-open");
  header.style.background = "var(--BG-COLOR-HEADER)";
  header.style.borderBottom = "1px solid var(--BORDER-COLOR-01)";
  navTitle.style.display = "block";
  open.style.display = "block";
  exit.style.display = "none";
  themeBtn.style.display = "block";
  main.style.display = "flex";
  // footer.style.display = "flex";
});
