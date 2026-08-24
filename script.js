const toggle = document.querySelector("#themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.dataset.theme = savedTheme;

function updateThemeButton() {
  const dark = root.dataset.theme === "dark";
  if (!toggle) return;
  toggle.textContent = dark ? "☀️" : "🌙";
  toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}

updateThemeButton();

toggle?.addEventListener("click", () => {
  const dark = root.dataset.theme === "dark";
  root.dataset.theme = dark ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  updateThemeButton();
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you! This demo form is ready to connect to a backend service.");
});
