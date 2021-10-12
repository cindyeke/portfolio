// Create Nav Items for small and large devices
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

  navList.insertBefore(secondNavListItem, navList.children[1]);
  navList.insertBefore(thirdNavListItem, navList.children[2]);

  return [secondNavListItem, thirdNavListItem];
};

// Display all nav items only on small screens
if (screen.width < 1008) {
  navToggle.style.display = "none";
  createNavItems();
}

const requestNavDisplayAnimation = (navListItemsArray) => {
  navList.classList.add("expand");

  setTimeout(() => {
    navToggleSwitch.classList.add("expand");
  }, [700]);

  setTimeout(() => {
    navListItemsArray[0].classList.remove("open");
  }, [1000]);

  setTimeout(() => {
    navListItemsArray[1].classList.remove("open");
  }, [1500]);
};

// Remove Nav Items
const removeNavItems = () => {
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
    navList.removeChild(navigationList.children[0]);
    navList.removeChild(navigationList.children[0]);
  }, [3000]);
};

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

let toggleState = true;
navToggle.addEventListener("click", () => {
  if (toggleState) {
    transitionToXIcon();
    let navListItemsArray = createNavItems();
    requestNavDisplayAnimation(navListItemsArray);
    toggleState = !toggleState;
  } else {
    transitionToBarsIcon();
    removeNavItems();
    toggleState = !toggleState;
  }
});
