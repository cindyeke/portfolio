import { navListItemsArray } from "./navigation";

// Activate Navigation Links

const HOME = "home";
const PROJECTS = "projects";

const customizeActiveNav = (navigation) => {
  if (navigation === "home") {
    navListItemsArray[0].classList.add("selected"); // first nav item class added
    navListItemsArray[1].classList.add("selected"); // first nav link class added
    navListItemsArray[2].classList.remove("selected"); // second nav item class removed
    navListItemsArray[3].classList.remove("selected"); // second nav link class removed
  } else {
    navListItemsArray[0].classList.remove("selected"); // first nav item class removed
    navListItemsArray[1].classList.remove("selected"); // first nav link class removed
    navListItemsArray[2].classList.add("selected"); // second nav item class added
    navListItemsArray[3].classList.add("selected"); // second nav link class added
  }
};

const getUrlHashToCustomizeNav = () => {
  let url = window.location.href;
  let hash = url.split("#")[1];
  !hash ? customizeActiveNav(HOME) : customizeActiveNav(PROJECTS);
};

navListItemsArray[0].classList.add("selected");

getUrlHashToCustomizeNav();

window.addEventListener("hashchange", () => {
  getUrlHashToCustomizeNav();
});
