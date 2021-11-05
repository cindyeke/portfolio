import { url } from "./project";

const projectInfo = document.querySelector("[data-delete-project-info]");
const deleteProjectBtn = document.querySelector("[data-delete-project-btn]");
const deleteProjectMessage = document.querySelector(
  "[data-delete-project-message]"
);

export const prepareDeleteDetails = (selectedProject) => {
  displaySelectedProjectOnModal(selectedProject.name, selectedProject.id);
};

const displaySelectedProjectOnModal = (name, id) => {
  projectInfo.innerHTML = `Are you sure you want to delete ${name} ?`;
  projectInfo.setAttribute("data-delete-project-info", id);
};

const deleteProject = async (id) => {
  let url2 = `${url}projects?projectid=${id}`;
  try {
    let response = await fetch(url2, {
      method: "DELETE",
    });

    let result = await response.json();
    if (result.code === 200) {
      deleteProjectMessage.style.color = "green";
      deleteProjectMessage.innerHTML = result.message;
    } else {
      deleteProjectMessage.style.color = "red";
      deleteProjectMessage.innerHTML = result.errorMessage;
    }
  } catch (e) {
    console.log(e);
  }
};

if (deleteProjectBtn) {
  deleteProjectBtn.addEventListener("click", () => {
    let id = projectInfo.getAttribute("data-delete-project-info");
    deleteProject(id);
  });
}
