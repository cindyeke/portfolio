import "../public/assets/scss/_global.scss";

const themeSwitch = document.querySelector("[data-nav-theme-toggle]");

const setTheme = (theme) => (document.documentElement.className = theme);

if (themeSwitch) {
  themeSwitch.checked = true;

  themeSwitch.addEventListener("change", (e) => {
    e.currentTarget.checked == true ? setTheme("bright") : setTheme("warm");
  });
}
