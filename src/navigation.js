// const mainNav = document.querySelector("[data-nav-container1]");
// const mainNavDropdownContainer = document.querySelector(
//   "[data-nav-dropdown-container1]"
// );
// const mainNavDropdown = document.querySelector("[data-nav-dropdown-1]");
// const projectsNavDropdown = document.querySelector("[data-nav-dropdown-2]");
// const mainNavItems = document.querySelectorAll("[data-nav-link-1]");
// const mainNavItemsArray = Array.from(mainNavItems);

// const mainNavToggleContainer = document.querySelector(
//   "[data-nav-dropdown-container1]"
// );

// const projectsNavToggleContainer = document.querySelector(
//   "[data-nav-dropdown-container2]"
// );
// const mainNavToggle = document.querySelector("[data-nav__toggle1]");

// const navThemeContainer = document.querySelector("[data-theme-container]");

// const mainNavList = document.querySelector("[data-nav-list1]");
// const projectsNavList = document.querySelector("[data-nav-list2]");

// // Create Nav Item
// const createNavItems = (page) => {
//   // first nav item
//   const content2 = document.createTextNode("CV");
//   const content1 = document.createTextNode("[PDF]");
//   const navLinkDiv2 = document.createElement("div");
//   const navLinkDiv1 = document.createElement("div");
//   const firstnavLink = document.createElement("a");
//   const firstNavListItem = document.createElement("li");

//   firstNavListItem.className = "nav__item nav__item-toggle open";
//   firstnavLink.className = "nav__link main_nav__link";

//   navLinkDiv2.appendChild(content2);
//   navLinkDiv1.appendChild(content1);
//   firstnavLink.appendChild(navLinkDiv2);
//   firstnavLink.appendChild(navLinkDiv1);
//   firstNavListItem.appendChild(firstnavLink);

//   // Second Nav Item
//   const secondIconContainer = document.createElement("i");
//   const secondNavLink = document.createElement("a");
//   const secondNavListItem = document.createElement("li");

//   secondIconContainer.className = "fa fa-linkedin-square nav__icon";
//   secondNavLink.className = "nav__link main_nav__link";
//   secondNavListItem.className = "nav__item nav__item-toggle open";

//   secondNavLink.appendChild(secondIconContainer);
//   secondNavListItem.appendChild(secondNavLink);

//   // Third Nav Item
//   const thirdIconContainer = document.createElement("i");
//   const thirdNavLink = document.createElement("a");
//   const thirdNavListItem = document.createElement("li");

//   thirdIconContainer.className = "fa fa-envelope-o nav__icon";
//   thirdNavLink.className = "nav__link main_nav__link";
//   thirdNavListItem.className = "nav__item nav__item-toggle open";

//   thirdNavLink.appendChild(thirdIconContainer);
//   thirdNavListItem.appendChild(thirdNavLink);

//   let navigationList = getNavigationList(page);

//   navigationList.insertBefore(firstNavListItem, navigationList.children[0]);
//   navigationList.insertBefore(secondNavListItem, navigationList.children[1]);
//   navigationList.insertBefore(thirdNavListItem, navigationList.children[2]);

//   return [firstNavListItem, secondNavListItem, thirdNavListItem];
// };

// const requestAnimationFrame = (navListArr) => {
//   navThemeContainer.classList.add("expand");

//   setTimeout(() => {
//     navListArr[0].classList.remove("open");
//   }, [500]);

//   setTimeout(() => {
//     navListArr[1].classList.remove("open");
//   }, [1000]);

//   setTimeout(() => {
//     navListArr[2].classList.remove("open");
//   }, [1500]);
// };

// // Remove Nav Items
// const removeNavItems = (page) => {
//   navThemeContainer.classList.remove("expand");
//   let navigationList = getNavigationList(page);

//   setTimeout(() => {
//     navigationList.children[2].classList.add("open");
//   }, [200]);

//   setTimeout(() => {
//     navigationList.children[1].classList.add("open");
//   }, [700]);

//   setTimeout(() => {
//     navigationList.children[0].classList.add("open");
//   }, [1200]);

//   setTimeout(() => {
//     navigationList.removeChild(navigationList.children[0]);
//     navigationList.removeChild(navigationList.children[0]);
//     navigationList.removeChild(navigationList.children[0]);
//   }, [3000]);
// };

// const getNavigationList = (page) => {
//   let navigationList;
//   if (page === "main") {
//     navigationList = mainNavList;
//   } else {
//     navigationList = projectsNavList;
//   }

//   return navigationList;
// };

// const transitionToXIcon = () => {
//   mainNavToggle.classList.add("fa-spin");
//   mainNavToggle.classList.add("ease-display");
//   setTimeout(() => {
//     mainNavToggle.classList.remove("ease-display");
//     mainNavToggle.classList.remove("fa-bars");
//     mainNavToggle.classList.add("fa-times");
//     mainNavToggle.classList.remove("fa-spin");
//   }, [500]);
// };

// const transitionToBarsIcon = () => {
//   mainNavToggle.classList.add("fa-counter-spin");
//   mainNavToggle.classList.add("ease-display");
//   setTimeout(() => {
//     mainNavToggle.classList.remove("ease-display");
//     mainNavToggle.classList.remove("fa-times");
//     mainNavToggle.classList.add("fa-bars");
//     mainNavToggle.classList.remove("fa-counter-spin");
//   }, [500]);
// };

// // Check if you can add an event listener for when a screen changes
// if (screen.width < 700) {
//   mainNavDropdownContainer.style.display = "none";
//   createNavItems();
// }

// // Toggle Main Page Nav
// const toggleNav = (page) => {

//     transitionToXIcon();
//     let navListArr = createNavItems(page);
//     requestAnimationFrame(navListArr);
//     toggleState = !toggleState;
//   } else {
//     transitionToBarsIcon();
//     removeNavItems(page);
//     toggleState = !toggleState;
//   }
// };

// if (mainNavToggleContainer) {
//   let toggleState = true;

//   mainNavToggleContainer.addEventListener("click", () => {
//     if (toggleState) {

//     }
//   });
// }

// // Toggle Projects Page Nav
// if (projectsNavToggleContainer) {
//   let toggleState = true;

//   projectsNavToggleContainer.addEventListener("click", () => {
//     toggleNav("projects", toggleState);
//   });
// }

// NEW HERE

// Activate Nav

// const HOME = "home";
// const PROJECTS = "projects";

// const navItem = document.querySelectorAll("[data-nav-item]");
// const navLink = document.querySelectorAll(".nav__link");

// const customizeActiveNav = (navigation) => {
//   if (navigation === "home") {
//     navItem[0].classList.add("selected");
//     navItem[1].classList.remove("selected");
//     navLink[0].classList.add("selected");
//     navLink[1].classList.remove("selected");
//   } else {
//     navItem[1].classList.add("selected");
//     navItem[0].classList.remove("selected");
//     navLink[1].classList.add("selected");
//     navLink[0].classList.remove("selected");
//   }
// };

// const getUrlHashToCustomizeNav = () => {
//   let url = window.location.href;
//   let hash = url.split("#")[1];
//   !hash ? customizeActiveNav(HOME) : customizeActiveNav(PROJECTS);
// };

// navItem[0].classList.add("selected");
// navLink[0].classList.add("selected");

// getUrlHashToCustomizeNav();

// window.addEventListener("hashchange", () => {
//   getUrlHashToCustomizeNav();
// });

// Create Nav for small and large devices
const navList = document.querySelector("[data-nav-list]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navToggleElement = document.querySelector(".fa");

const createNavItems = () => {
  // Second Nav Item
  const secondNavListItemText = document.createTextNode("about");
  const secondNavLink = document.createElement("a");
  const secondNavListItem = document.createElement("li");

  secondNavListItem.className = "nav__item";
  secondNavLink.className = "nav__link";

  secondNavLink.appendChild(secondNavListItemText);
  secondNavListItem.appendChild(secondNavLink);

  // Third Nav Item
  const thirdNavListItemText = document.createTextNode("projects");
  const thirdNavListItem = document.createElement("li");
  let thirdNavLink = document.createElement("a");

  thirdNavListItem.className = "nav__item";
  thirdNavLink.className = "nav__link";

  thirdNavLink.appendChild(thirdNavListItemText);
  thirdNavListItem.appendChild(thirdNavLink);

  navList.insertBefore(secondNavListItem, navList.children[1]);
  navList.insertBefore(thirdNavListItem, navList.children[2]);
};

// Display Nav only on small screens
if (screen.width < 1008) {
  navToggle.style.display = "none";
  createNavItems();
}

//Toggle Nav Function

// const toggleNav = (page) => {
//   if(){
//     transitionToXIcon();
//     let navListArr = createNavItems(page);
//     requestAnimationFrame(navListArr);
//     toggleState = !toggleState;
//   } else {
//     transitionToBarsIcon();
//     removeNavItems(page);
//     toggleState = !toggleState;
//   }
// };

const transitionToXIcon = () => {
  navToggleElement.classList.add("fa-spin");
  navToggleElement.classList.add("ease-display");
  setTimeout(() => {
    navToggleElement.classList.remove("ease-display");
    navToggleElement.classList.remove("fa-bars");
    navToggleElement.classList.add("fa-times");
    navToggleElement.classList.remove("fa-spin");
  }, [500]);
};

const transitionToBarsIcon = () => {
  navToggleElement.classList.add("fa-counter-spin");
  navToggleElement.classList.add("ease-display");
  setTimeout(() => {
    navToggleElement.classList.remove("ease-display");
    navToggleElement.classList.remove("fa-times");
    navToggleElement.classList.add("fa-bars");
    navToggleElement.classList.remove("fa-counter-spin");
  }, [500]);
};

let toggle = true;
navToggle.addEventListener("click", () => {
  if (toggle) {
    toggle = !toggle;
    // navToggleElement.classList.remove("fa-bars");
    // navToggleElement.classList.add("fa-times");
    transitionToXIcon();
  } else {
    toggle = !toggle;
    // navToggleElement.classList.remove("fa-times");
    // navToggleElement.classList.add("fa-bars");
    transitionToBarsIcon();
  }
});
