import { toBeDeletedCategoryInput } from "./category-delete";
import { toBeUpdatedCategoryInput } from "./category-update";

const categoryGroups = Array.from(document.querySelectorAll("[data-category]"));
const addCategoryInput = document.querySelector("[data-add-category]");
const addCategoryBtn = document.querySelector("[data-add-category-btn]");
const addProjectCategoryRadioGroupContainer = document.querySelector(
  "[data-add-project-radio-group]"
);
const addCategoryMessage = document.querySelector(
  "[data-add-category-message]"
);
const updateCategoryRadioGroupContainer = document.querySelector(
  "[data-update-category-radio-group]"
);
const deleteCategoryRadioGroupContainer = document.querySelector(
  "[data-delete-category-radio-group]"
);

// export const url = "http://localhost:2020/api/";
export const url = "/api/";

const toggleState = () => {
  return true;
};

// Add styling to Category
if (categoryGroups) {
  categoryGroups.forEach((group, index) => {
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

      categoryGroups.filter((filteredGroup, filteredGroupIndex) => {
        if (filteredGroupIndex !== index) {
          filteredGroup.classList.remove("expand");
        }
      });
    });
  });
}

// Fetch All Categories
export const fetchAllCategories = async () => {
  try {
    let response = await fetch(`${url}categories`);
    let result = await response.json();
    let data = await result.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};

// Function to add category
const addCategory = async (data) => {
  try {
    let response = await fetch(`${url}categories`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await response.json();

    if (result.code === 201) {
      addCategoryMessage.style.color = "green";
      addCategoryMessage.innerHTML = result.message;
    } else {
      addCategoryMessage.style.color = "red";
      addCategoryMessage.innerHTML = result.errorMessage;
    }
  } catch (e) {
    console.log(e);
  }
};

// Generate Radio Group Inputs based on fetched Categories
export const generateRadioGroup = (sectionGroup, categoryDetails) => {
  categoryDetails.map((category) => {
    const radioContainer = document.createElement("div");
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");

    if (sectionGroup === "update") {
      radioInput.setAttribute("id", `update-${category.category_id}`);
    } else if (sectionGroup === "delete") {
      radioInput.setAttribute("id", `delete-${category.category_id}`);
    } else {
      radioInput.setAttribute("id", `addproject-${category.category_id}`);
    }

    if (sectionGroup === "update") {
      radioInput.setAttribute("name", "updateCategory");
    } else if (sectionGroup === "delete") {
      radioInput.setAttribute("name", "deleteCategory");
    } else {
      radioInput.setAttribute("name", `addProject`);
    }

    radioInput.setAttribute("value", `${category.category_name}`);
    radioInput.setAttribute("data-category-radio-input", "");
    const radioLabel = document.createElement("label");

    if (sectionGroup === "update") {
      radioInput.setAttribute("for", `update-${category.category_id}`);
    } else if (sectionGroup === "delete") {
      radioInput.setAttribute("for", `delete-${category.category_id}`);
    } else {
      radioInput.setAttribute("for", `addproject-${category.category_id}`);
    }

    radioLabel.innerText = ` ${category.category_name}`;

    radioContainer.appendChild(radioInput);
    radioContainer.appendChild(radioLabel);

    sectionGroup === "update" &&
      updateCategoryRadioGroupContainer.insertBefore(
        radioContainer,
        updateCategoryRadioGroupContainer.childNodes[0]
      );

    sectionGroup === "delete" &&
      deleteCategoryRadioGroupContainer.insertBefore(
        radioContainer,
        deleteCategoryRadioGroupContainer.childNodes[0]
      );

    if (sectionGroup === "addproject") {
      addProjectCategoryRadioGroupContainer.insertBefore(
        radioContainer,
        addProjectCategoryRadioGroupContainer.childNodes[0]
      );
    }
  });
};

export const triggerRadioEvent = (radioInputs) => {
  radioInputs.forEach((radioInput) => {
    radioInput.addEventListener("click", () => {
      let radioId = radioInput.id;
      let section = radioId.split("-")[0];

      section === "update"
        ? (toBeUpdatedCategoryInput.value = radioInput.value)
        : (toBeDeletedCategoryInput.value = radioInput.value);

      let idString = radioInput.id;
      let id = idString.split("-");
      section === "update"
        ? toBeUpdatedCategoryInput.setAttribute("data-input-id", id[1])
        : toBeDeletedCategoryInput.setAttribute("data-input-id", id[1]);
    });
  });
};

// Trigger function when Add Category Button is clicked
if (addCategoryBtn) {
  addCategoryBtn.addEventListener("click", () => {
    if (addCategoryInput.value === "") {
      addCategoryMessage.style.color = "red";
      addCategoryMessage.innerHTML = "INPUT FIELD CANNOT BE EMPTY";
    } else {
      let name = addCategoryInput.value;
      let data = { name: name };
      addCategory(data);
    }
  });
}
