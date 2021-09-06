import "../public/assets/scss/styles.scss";
import "./theme";
import "./drag-to-scroll";
import "./navigation";

// Page Flip Functionality
const directionButton = document.querySelector("[data-direction-button]");
const pageBoxInner = document.querySelector("[data-pagebox-inner]");
const projectListContainer = document.querySelector("[data-project-list]");

if (pageBoxInner) {
  if (directionButton) {
    directionButton.addEventListener("click", (e) => {
      pageBoxInner.style.transform = "rotateX(180deg)";
    });
  }

  if (projectListContainer) {
    projectListContainer.addEventListener("scroll", (e) => {
      if (projectListContainer.scrollTop === 0) {
        pageBoxInner.style.transform = "rotateX(0deg)";
      }
    });
  }
}

// Project Menu Selection Functionality
const projectButtons = document.querySelectorAll("[data-project-button]");

if (projectButtons) {
  let projectButtonsArray = Array.from(projectButtons);
  projectButtonsArray[0].classList.add("active");

  projectButtonsArray.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("active");
      projectButtonsArray.forEach((unSelectedButton) => {
        if (unSelectedButton != button) {
          unSelectedButton.classList.remove("active");
        }
      });
    });
  });
}
