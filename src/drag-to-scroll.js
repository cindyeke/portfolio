const projectNavContainer = document.querySelector(
  "[data-project-nav-container]"
);

let isDown = false;
let startX;
let scrollLeft;

export const handleEventStart = (e) => {
  let eventType = e.type;
  let eventPageX;

  eventType.includes("touch")
    ? (eventPageX = e.changedTouches[0].pageX)
    : (eventPageX = e.pageX);

  isDown = true;
  projectNavContainer.classList.add("active");
  startX = eventPageX - projectNavContainer.offsetLeft;
  scrollLeft = projectNavContainer.scrollLeft;
};

export const handleEventEnd = () => {
  isDown = false;
  projectNavContainer.classList.remove("active");
};

export const handleEventMove = (e) => {
  let eventType = e.type;
  let eventPageX;

  eventType.includes("touch")
    ? (eventPageX = e.changedTouches[0].pageX)
    : (eventPageX = e.pageX);

  if (!isDown) return;
  e.preventDefault();
  const x = eventPageX - projectNavContainer.offsetLeft;
  const walk = x - startX;
  projectNavContainer.scrollLeft = scrollLeft - walk;
};
