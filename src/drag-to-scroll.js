const projectNavContainer = document.querySelector(
  "[data-project-nav-container]"
);

let isDown = false;
let startX;
let scrollLeft;

const handleEventStart = (e) => {
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

const handleEventEnd = () => {
  isDown = false;
  projectNavContainer.classList.remove("active");
};

const handleEventMove = (e) => {
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

if (projectNavContainer) {
  projectNavContainer.addEventListener("touchstart", handleEventStart);
  projectNavContainer.addEventListener("touchmove", handleEventMove);
  projectNavContainer.addEventListener("touchend", handleEventEnd);

  projectNavContainer.addEventListener("mousedown", handleEventStart);
  projectNavContainer.addEventListener("mousemove", handleEventMove);
  projectNavContainer.addEventListener("mouseleave", handleEventEnd);
  projectNavContainer.addEventListener("mouseup", handleEventEnd);
}
