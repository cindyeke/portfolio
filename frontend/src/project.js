import { prepareForm } from "./project-update";
import { prepareDeleteDetails } from "./project-delete";
import { triggerRadioEvent } from "./category";

const addProjectGroup = document.querySelector("[data-add-project]");
const otherProjectGroups = Array.from(
  document.querySelectorAll("[data-project-group]")
);

const updateProjectRadioGroup = document.querySelector(
  "[data-updateproject-radio-group]"
);
const deleteProjectRadioGroup = document.querySelector(
  "[data-deleteproject-radio-group]"
);

const modal = document.querySelector("[ data-modal]");
const modalExitIcon = document.querySelector("[data-modal-icon]");
const modalContentGroup = Array.from(
  document.querySelectorAll("[data-modal-content-group]")
);
const modalContainer = document.querySelector("[data-modal-container]");
const addProjectForm = document.querySelector("[data-add-project-form]");
const addProjectMessage = document.querySelector("[data-add-project-message]");

// export const url = "http://localhost:2020/api/";
export const url = "/api/";

// Filter Modal Content for selected project settings
const filterModalContent = (groupIndex) => {
  modalContentGroup.filter((group, groupContentIndex) => {
    if (groupContentIndex !== groupIndex) {
      group.classList.add("nodisplay");
    } else {
      group.classList.remove("nodisplay");
    }
  });
};

// Functionality to redirect chosen modal content
const requestToGenerateModal = (groupIndex) => {
  if (groupIndex === 0) {
    filterModalContent(groupIndex);
  } else if (groupIndex === 1) {
    filterModalContent(groupIndex);
  } else {
    modalContainer.classList.add("resize");
    filterModalContent(groupIndex);
  }
};

// Functionality to position and display modal
const positionModal = () => {
  modal.classList.add("position");
};

const displayModal = (groupIndex) => {
  modal.classList.add("display");
  requestToGenerateModal(groupIndex);
};

export const requestToDisplayModal = (index) => {
  positionModal();

  setTimeout(() => {
    displayModal(index);
  }, [500]);
};

// Trigger actions when add project group is clicked
if (addProjectGroup) {
  addProjectGroup.addEventListener("click", () => {
    requestToDisplayModal(0);
  });
}

// Trigger actions when other project groups are clicked
const toggleState = () => {
  return true;
};

if (otherProjectGroups) {
  otherProjectGroups.forEach((group, index) => {
    group.children[0].addEventListener("click", () => {
      let toggle = false;

      if (group.classList.contains("expand")) {
        toggle = toggleState();
      }

      if (toggle) {
        group.classList.remove("expand");
        toggle = !toggle;
      } else {
        group.classList.add("expand");
        toggle = !toggle;
      }

      otherProjectGroups.filter((filteredGroup, filteredGroupIndex) => {
        if (filteredGroupIndex !== index) {
          filteredGroup.classList.remove("expand");
        }
      });
    });
  });
}

// Functionality to Remove Modal
if (modalExitIcon) {
  modalExitIcon.addEventListener("click", () => {
    modal.classList.remove("display");

    setTimeout(() => {
      modal.classList.remove("position");
      modalContainer.classList.remove("resize");
    }, [1000]);
  });
}

export const triggerRadioInputs = (toBeUpdatedRadioInputs, projects, group) => {
  toBeUpdatedRadioInputs.forEach((selectedRadioInput) => {
    selectedRadioInput.addEventListener("click", () => {
      group === "update" ? requestToDisplayModal(1) : requestToDisplayModal(2);

      let projectIdInfo = selectedRadioInput.id.split("-");
      let projectId = projectIdInfo[1];

      let selectedProjectArray = projects.filter((project) => {
        return project.id == projectId;
      });

      if (group === "update") {
        prepareForm(selectedProjectArray[0]);
      } else {
        prepareDeleteDetails(selectedProjectArray[0]);
      }
    });
  });
};

// Generate Radio Group Inputs based on fetched Projects
export const generateProjectRadioGroup = (sectionGroup, projectDetails) => {
  projectDetails.map((project) => {
    const radioContainer = document.createElement("div");
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");

    if (sectionGroup === "update") {
      radioInput.setAttribute("id", `update-${project.id}`);
    } else {
      radioInput.setAttribute("id", `delete-${project.id}`);
    }

    if (sectionGroup === "update") {
      radioInput.setAttribute("name", "updateProject");
    } else {
      radioInput.setAttribute("name", "deleteProject");
    }

    radioInput.setAttribute("value", `${project.name}`);
    radioInput.setAttribute("data-project-radio-input", "");
    const radioLabel = document.createElement("label");

    if (sectionGroup === "update") {
      radioInput.setAttribute("for", `update-${project.id}`);
    } else {
      radioInput.setAttribute("for", `delete-${project.id}`);
    }

    radioLabel.innerText = ` ${project.name}`;

    radioContainer.appendChild(radioInput);
    radioContainer.appendChild(radioLabel);

    sectionGroup === "update" &&
      updateProjectRadioGroup.insertBefore(
        radioContainer,
        updateProjectRadioGroup.childNodes[0]
      );

    sectionGroup === "delete" &&
      deleteProjectRadioGroup.insertBefore(
        radioContainer,
        deleteProjectRadioGroup.childNodes[0]
      );
  });
};

const generateMessage = (status, message) => {
  status === "success"
    ? (addProjectMessage.style.color = "green")
    : (addProjectMessage.style.color = "red");
  addProjectMessage.innerHTML = message;
};

// Functionality to Add Project
const addProject = async (data) => {
  try {
    let response = await fetch(`${url}/projects`, {
      method: "POST",
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
  } catch (e) {
    console.log(e);
  }
};

const checkRadioInputs = () => {
  const radioInputs = document.querySelectorAll("[data-category-radio-input]");
  triggerRadioEvent(radioInputs);

  return radioInputs;
};

// Functionality to trigger action when submit button to create new project is clicked
if (addProjectForm) {
  addProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = addProjectForm.elements[0].value;
    let description = addProjectForm.elements[1].value;
    let code = addProjectForm.elements[2].value;
    let site = addProjectForm.elements[3].value;

    if (name === "") {
      generateMessage("error", "Input field(s) must not be empty");
      return;
    }
    if (description === "") {
      generateMessage("error", "Input field(s) must not be empty");
      return;
    }
    if (code === "") {
      generateMessage("error", "Input field(s) must not be empty");
      return;
    }
    if (site === "") {
      generateMessage("error", "Input field(s) must not be empty");
      return;
    }

    let radioInputs = Array.from(checkRadioInputs());
    let radioInputArray = radioInputs.filter((radioInput) => {
      return radioInput.checked;
    });

    if (radioInputArray.length === 0) {
      generateMessage("error", "Category must not be chosen");
      return;
    }

    addProjectMessage.innerHTML = "";
    addProjectForm.elements[0].value = "";
    addProjectForm.elements[1].value = "";
    addProjectForm.elements[2].value = "";
    addProjectForm.elements[3].value = "";

    let categoryIdInfo = radioInputArray[0].id;
    let categoryId = categoryIdInfo.split("-")[1];

    let data = {
      name: name,
      description: description,
      code: code,
      website: site,
      category: categoryId,
    };

    addProject(data);
  });
}
