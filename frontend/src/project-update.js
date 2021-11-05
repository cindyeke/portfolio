import { url } from "./project";

const updateProjectForm = document.querySelector("[data-updateproject-form]");
const updateProjectMessage = document.querySelector(
  "[data-update-project-message]"
);
const selectedProjectId = document.querySelector(
  "[data-selected-project-category]"
);

export const prepareForm = (selectedProject) => {
  if (updateProjectForm) {
    let name = selectedProject.name;
    let description = selectedProject.description;
    let code = selectedProject.code;
    let site = selectedProject.website;
    let projectId = selectedProject.id;

    selectedProjectId.style.display = "none";

    updateProjectForm.elements[0].value = name;
    updateProjectForm.elements[1].value = description;
    updateProjectForm.elements[2].value = code;
    updateProjectForm.elements[3].value = site;
    selectedProjectId.value = projectId;
  }
};

const generateMessage = (status, message) => {
  status === "success"
    ? (updateProjectMessage.style.color = "green")
    : (updateProjectMessage.style.color = "red");
  updateProjectMessage.innerHTML = message;
};

const updateProject = async (data) => {
  let response = await fetch(`${url}/projects`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let result = await response.json();

  if (result.code === 200) {
    generateMessage("success", result.message);
  } else {
    generateMessage("error", result.errorMessage);
  }
};

if (updateProjectForm) {
  updateProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (updateProjectForm.elements[0].value === "") {
      generateMessage("error", "Input field(s) must not be empty");
      return;
    }
    if (updateProjectForm.elements[1].value === "") {
      generateMessage("error", "Input field(s) must not be empty");
      return;
    }
    if (updateProjectForm.elements[2].value === "") {
      generateMessage("error", "Input field(s) must not be empty");
      return;
    }
    if (updateProjectForm.elements[3].value === "") {
      generateMessage("error", "Input field(s) must not be empty");
      return;
    }

    updateProjectMessage.innerHTML = "";

    let data = {
      description: updateProjectForm.elements[1].value,
      code: updateProjectForm.elements[2].value,
      website: updateProjectForm.elements[3].value,
      id: selectedProjectId.value,
    };

    updateProject(data);
  });
}
