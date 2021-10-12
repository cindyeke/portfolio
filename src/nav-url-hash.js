// Activate Navigation Links

const body = document.getElementsByTagName("BODY")[0];
body.style.overflow = "hidden";

const HOME = "home";
const PROJECTS = "projects";

const navItem = document.querySelectorAll("[data-nav-item]");
const navLink = document.querySelectorAll(".nav__link");

const customizeActiveNav = (navigation) => {
  if (navigation === "home") {
    navItem[0].classList.add("selected");
    navItem[1].classList.remove("selected");
    navLink[0].classList.add("selected");
    navLink[1].classList.remove("selected");
  } else {
    navItem[1].classList.add("selected");
    navItem[0].classList.remove("selected");
    navLink[1].classList.add("selected");
    navLink[0].classList.remove("selected");
  }
};

const getUrlHashToCustomizeNav = () => {
  let url = window.location.href;
  let hash = url.split("#")[1];
  !hash ? customizeActiveNav(HOME) : customizeActiveNav(PROJECTS);
};

navItem[0].classList.add("selected");
navLink[0].classList.add("selected");

getUrlHashToCustomizeNav();

window.addEventListener("hashchange", () => {
  getUrlHashToCustomizeNav();
});
