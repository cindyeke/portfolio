import { url } from "./category";

export const toBeDeletedCategoryInput = document.querySelector(
  "[data-delete-category-input"
);
const deleteCategoryBtn = document.querySelector("[data-delete-category-btn]");
const deleteCategoryMessage = document.querySelector(
  "[data-delete-category-message]"
);

toBeDeletedCategoryInput.style.display = "none";

// Function to delete category
const deleteCategory = async (id) => {
  try {
    let url2 = `${url}categories?categoryid=${id}`;
    let response = await fetch(url2, {
      method: "DELETE",
      mode: "cors",
    });

    let result = await response.json();

    if (result.code === 200) {
      deleteCategoryMessage.style.color = "green";
      deleteCategoryMessage.innerHTML = result.message;
    } else {
      deleteCategoryMessage.style.color = "red";
      deleteCategoryMessage.innerHTML = result.errorMessage;
    }
  } catch (e) {
    console.log(e);
  }
};

// Functionality to submit button to delete category
if (deleteCategoryBtn) {
  deleteCategoryBtn.addEventListener("click", () => {
    if (toBeDeletedCategoryInput.value === "") {
      deleteCategoryMessage.style.color = "red";
      deleteCategoryMessage.innerHTML = "Category field can not be empty";
    } else {
      let categoryId = toBeDeletedCategoryInput.getAttribute("data-input-id");

      deleteCategory(categoryId);

      toBeDeletedCategoryInput.value = "";
    }
  });
}
