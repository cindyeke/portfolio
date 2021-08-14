import "../public/assets/scss/styles.scss";
import {
  handleEventStart,
  handleEventEnd,
  handleEventMove,
} from "./drag-to-scroll";

const projectNavContainer = document.querySelector(
  "[data-project-nav-container]"
);
const projectButtons = document.querySelectorAll("[data-project-button]");

projectNavContainer.addEventListener("touchstart", handleEventStart);
projectNavContainer.addEventListener("touchmove", handleEventMove);
projectNavContainer.addEventListener("touchend", handleEventEnd);

projectNavContainer.addEventListener("mousedown", handleEventStart);
projectNavContainer.addEventListener("mousemove", handleEventMove);
projectNavContainer.addEventListener("mouseleave", handleEventEnd);
projectNavContainer.addEventListener("mouseup", handleEventEnd);

let projectButtonsArray = Array.from(projectButtons);
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
