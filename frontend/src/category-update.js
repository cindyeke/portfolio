import { url } from "./category";

export const toBeUpdatedCategoryInput = document.querySelector(
  "[data-update-category-input]"
);
const updateCategoryBtn = document.querySelector("[data-update-category-btn]");
const updateCategoryMessage = document.querySelector(
  "[data-update-category-message]"
);

// Function to update category
const updateCategory = async (data) => {
  try {
    let response = await fetch(`${url}categories`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await response.json();

    if (result.code === 200) {
      updateCategoryMessage.style.color = "green";
      updateCategoryMessage.innerHTML = result.message;
    } else {
      updateCategoryMessage.style.color = "red";
      updateCategoryMessage.innerHTML = result.errorMessage;
    }
  } catch (e) {
    console.log(e);
  }
};

if (updateCategoryBtn) {
  updateCategoryBtn.addEventListener("click", () => {
    if (toBeUpdatedCategoryInput.value === "") {
      updateCategoryMessage.style.color = "red";
      updateCategoryMessage.innerHTML = "Category field can not be empty";
    } else {
      let categoryName = toBeUpdatedCategoryInput.value;
      let categoryId = toBeUpdatedCategoryInput.getAttribute("data-input-id");

      let data = { id: categoryId, name: categoryName };
      updateCategory(data);

      toBeUpdatedCategoryInput.value = "";
    }
  });
}
