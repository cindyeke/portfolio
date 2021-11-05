import "../public/assets/scss/dashboard.scss";
import {
  fetchAllCategories,
  generateRadioGroup,
  triggerRadioEvent,
} from "./category";
import { generateProjectRadioGroup, triggerRadioInputs } from "./project";

let url = "http://localhost:2020/api/";

const body = document.getElementsByTagName("BODY")[0];
body.style.overflow = "hidden";

const projectNo = document.querySelector("[data-dashboard-project-no]");
const categoryNo = document.querySelector("[data-dashboard-category-no]");

const fetchAllProjects = async () => {
  let response = await fetch(`${url}projects`);
  let result = await response.json();
  let data = await result.data;

  return data;
};

const projectInfo = async () => {
  let projects = await fetchAllProjects();
  projectNo.innerHTML = projects.length;
  let categories = await fetchAllCategories();

  generateRadioGroup("addproject", categories);

  generateProjectRadioGroup("update", projects);
  generateProjectRadioGroup("delete", projects);

  const toBeUpdatedRadioInputs = Array.from(
    document.querySelectorAll('input[name="updateProject"]')
  );

  const toBeDeletedRadioInputs = Array.from(
    document.querySelectorAll('input[name="deleteProject"]')
  );

  triggerRadioInputs(toBeUpdatedRadioInputs, projects, "update");
  triggerRadioInputs(toBeDeletedRadioInputs, projects, "delete");
};

const categoryInfo = async () => {
  let categories = await fetchAllCategories();
  categoryNo.innerHTML = categories.length;

  generateRadioGroup("update", categories);
  generateRadioGroup("delete", categories);

  const radioInputs = Array.from(
    document.querySelectorAll("[data-category-radio-input]")
  );

  triggerRadioEvent(radioInputs);
};

(async () => {
  await projectInfo();
  await categoryInfo();
})();
