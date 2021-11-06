const projectContainers = document.querySelectorAll("[data-project-list]");

let isDown = false;
let startX;
let scrollLeft;

const handleEventStart = (e, container) => {
  let eventType = e.type;
  let eventPageX;

  eventType.includes("touch")
    ? (eventPageX = e.changedTouches[0].pageX)
    : (eventPageX = e.pageX);

  isDown = true;
  container.classList.add("active");
  startX = eventPageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
};

const handleEventEnd = (container) => {
  isDown = false;
  container.classList.remove("active");
};

const handleEventMove = (e, container) => {
  let eventType = e.type;
  let eventPageX;

  eventType.includes("touch")
    ? (eventPageX = e.changedTouches[0].pageX)
    : (eventPageX = e.pageX);

  if (!isDown) return;
  e.preventDefault();
  const x = eventPageX - container.offsetLeft;
  const walk = x - startX;
  container.scrollLeft = scrollLeft - walk;
};

if (projectContainers) {
  projectContainers.forEach((container) => {
    container.addEventListener("touchstart", (e) => {
      handleEventStart(e, container);
    });
    container.addEventListener("touchmove", (e) => {
      handleEventMove(e, container);
    });
    container.addEventListener("touchend", () => {
      handleEventEnd(container);
    });

    container.addEventListener("mousedown", (e) => {
      handleEventStart(e, container);
    });
    container.addEventListener("mousemove", (e) => {
      handleEventMove(e, container);
    });
    container.addEventListener("mouseleave", () => {
      handleEventEnd(container);
    });
    container.addEventListener("mouseup", () => {
      handleEventEnd(container);
    });
  });
}
