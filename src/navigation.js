const navList = document.querySelector("[data-nav-list]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navToggleElement = document.querySelector(".fa");
const navToggleSwitch = document.querySelector(
  "[data-nav-theme-toggle-control]"
);

const createNavItems = () => {
  // Second Nav Item
  const secondNavListItemText = document.createTextNode("about");
  const secondNavLink = document.createElement("a");
  const secondNavListItem = document.createElement("li");

  secondNavLink.href = "#";
  secondNavListItem.className = "nav__item nav__item--toggle open";
  secondNavLink.className = "nav__link";

  secondNavLink.appendChild(secondNavListItemText);
  secondNavListItem.appendChild(secondNavLink);

  // Third Nav Item
  const thirdNavListItemText = document.createTextNode("projects");
  const thirdNavListItem = document.createElement("li");
  let thirdNavLink = document.createElement("a");

  thirdNavLink.href = "#projects";
  thirdNavListItem.className = "nav__item nav__item--toggle open";
  thirdNavLink.className = "nav__link";

  thirdNavLink.appendChild(thirdNavListItemText);
  thirdNavListItem.appendChild(thirdNavLink);

  return [secondNavListItem, secondNavLink, thirdNavListItem, thirdNavLink];
};

export let navListItemsArray = createNavItems();

const insertNavItemsToNavigationList = (navItemsArray) => {
  navList.insertBefore(navItemsArray[0], navList.children[1]);
  navList.insertBefore(navItemsArray[2], navList.children[2]);
};

// Display Nav toggle icon only large screens
if (screen.width < 1008) {
  navToggle.style.display = "none";
}

// Display Nav Items with Animation functionality
const requestDisplayNavAnimation = (navListItemsArray) => {
  navList.classList.add("expand");

  setTimeout(() => {
    navToggleSwitch.classList.add("expand");
  }, [700]);

  setTimeout(() => {
    navListItemsArray[0].classList.remove("open");
  }, [1000]);

  setTimeout(() => {
    navListItemsArray[2].classList.remove("open");
  }, [1500]);
};

// Remove Nav Items with Animation functionality
const requestRemoveNavAnimation = () => {
  setTimeout(() => {
    navList.children[2].classList.add("open");
  }, [200]);

  setTimeout(() => {
    navList.children[1].classList.add("open");
  }, [700]);

  setTimeout(() => {
    navToggleSwitch.classList.remove("expand");
  }, [1200]);

  setTimeout(() => {
    navList.classList.remove("expand");
  }, [2500]);

  setTimeout(() => {
    navList.removeChild(navList.children[1]);
    navList.removeChild(navList.children[1]);
  }, [3000]);
};

// Transition to FontAwesome X Icon
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

// Transition to FontAwesome Bars Icon
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

// Nav Dropdown Functionality
let toggleState = true;
navToggle.addEventListener("click", () => {
  if (toggleState) {
    transitionToXIcon();
    insertNavItemsToNavigationList(navListItemsArray);
    requestDisplayNavAnimation(navListItemsArray);
    toggleState = !toggleState;
  } else {
    transitionToBarsIcon();
    requestRemoveNavAnimation();
    toggleState = !toggleState;
  }
});
