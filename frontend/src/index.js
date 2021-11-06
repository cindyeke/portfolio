import "../public/assets/scss/styles.scss";
import "./theme";
import "./navigation";
import "./drag-to-scroll";
import "./nav-url-hash";
import pdfFile from "../public/assets/file/CINDY EKE - CV.pdf";

// export const url = "http://localhost:2020/api/";
// export const url = "/api/";

const body = document.getElementsByTagName("BODY")[0];
body.style.overflow = "hidden";

const resume = document.querySelector("[data-resume]");
resume.href = pdfFile;

const projectsListContainer = document.querySelector("[data-projects-list]");

// let isDown = false;
// let startX;
// let scrollLeft;

// const handleEventStart = (e, container) => {
//   let eventType = e.type;
//   let eventPageX;

//   eventType.includes("touch")
//     ? (eventPageX = e.changedTouches[0].pageX)
//     : (eventPageX = e.pageX);

//   isDown = true;
//   container.classList.add("active");
//   startX = eventPageX - container.offsetLeft;
//   scrollLeft = container.scrollLeft;
// };

// const handleEventEnd = (container) => {
//   isDown = false;
//   container.classList.remove("active");
// };

// const handleEventMove = (e, container) => {
//   let eventType = e.type;
//   let eventPageX;

//   eventType.includes("touch")
//     ? (eventPageX = e.changedTouches[0].pageX)
//     : (eventPageX = e.pageX);

//   if (!isDown) return;
//   e.preventDefault();
//   const x = eventPageX - container.offsetLeft;
//   const walk = x - startX;
//   container.scrollLeft = scrollLeft - walk;
// };

// const fetchProjectsById = async (id) => {
//   let url2 = `${url}projects/${id}`;
//   let response = await fetch(url2);
//   let result = await response.json();

//   if (result.code === 200) {
//     return result.data;
//   }
// };

// const generateEachProjectGroupList = async (categoryId, index) => {
//   try {
//     let projectLists = await fetchProjectsById(categoryId);

//     const projectList = document.querySelectorAll("[data-project-list]");

//     projectLists.forEach((list) => {
//       let project = document.createElement("article");
//       project.classList.add("project");
//       project.setAttribute("data-project", "");

//       let projectTitle = document.createElement("div");
//       projectTitle.classList.add("project__title");
//       projectTitle.innerHTML = `${list.name}`;

//       let projectDescription = document.createElement("div");
//       projectDescription.classList.add("project__description");
//       projectDescription.innerHTML = `${list.description}`;

//       let projectCodeLink = document.createElement("a");
//       projectCodeLink.classList.add("project__btn");
//       projectCodeLink.setAttribute("href", `${list.code}`);
//       projectCodeLink.innerHTML = "code";

//       let projectSiteLink = document.createElement("a");
//       projectSiteLink.classList.add("project__btn");
//       projectSiteLink.setAttribute("href", `${list.website}`);
//       projectSiteLink.innerHTML = "visit website";

//       projectList[index].appendChild(project);
//       project.appendChild(projectTitle);
//       project.appendChild(projectDescription);
//       project.insertBefore(projectSiteLink, project.childNodes[2]);
//       project.insertBefore(projectCodeLink, project.childNodes[2]);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// const generateProjectCategoryGroup = (categoryData) => {
//   for (let i = 0; i < categoryData.length; i++) {
//     let projectCategory = document.createElement("div");
//     projectCategory.classList.add("projects__category");

//     let projectCategoryTitle = document.createElement("h3");
//     projectCategoryTitle.classList.add("projects__category-title");
//     projectCategoryTitle.innerHTML = `${categoryData[i].category_name}`;

//     let projectList = document.createElement("div");
//     projectList.classList.add("projects__category-list");
//     projectList.setAttribute("data-project-list", i);

//     // Add to DOM
//     projectsListContainer.appendChild(projectCategory);
//     projectCategory.appendChild(projectCategoryTitle);
//     projectCategory.appendChild(projectList);

//     generateEachProjectGroupList(
//       categoryData[i].category_id,
//       projectList.getAttribute("data-project-list")
//     );
//   }

//   const projectContainers = document.querySelectorAll("[data-project-list]");

//   if (projectContainers) {
//     projectContainers.forEach((container) => {
//       container.addEventListener("touchstart", (e) => {
//         handleEventStart(e, container);
//       });
//       container.addEventListener("touchmove", (e) => {
//         handleEventMove(e, container);
//       });
//       container.addEventListener("touchend", () => {
//         handleEventEnd(container);
//       });

//       container.addEventListener("mousedown", (e) => {
//         handleEventStart(e, container);
//       });
//       container.addEventListener("mousemove", (e) => {
//         handleEventMove(e, container);
//       });
//       container.addEventListener("mouseleave", () => {
//         handleEventEnd(container);
//       });
//       container.addEventListener("mouseup", () => {
//         handleEventEnd(container);
//       });
//     });
//   }
// };

// Fetch All Categories
// const fetchAllCategories = async () => {
//   try {
//     let response = await fetch(`${url}categories`);
//     let result = await response.json();
//     let data = await result.data;

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// const structureProjectList = async () => {
//   try {
//     let categoryData = await fetchAllCategories();
//     generateProjectCategoryGroup(categoryData);
//   } catch (e) {
//     console.log(e);
//   }
// };

// structureProjectList();
