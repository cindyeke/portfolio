const Category = require("../models/category.model");
const responseHandlers = require("../handlers/response");

exports.create = (req, res) => {
  console.log("Initializing request to create new category...");

  // validate request
  if (!req.body) {
    responseHandlers.error(res, null, "Request body can not be empty");
    return;
  }

  let categoryName = req.body.name;
  let newCategory = new Category(null, categoryName);

  newCategory.create(newCategory.name, (err, data) => {
    if (err) {
      if (err.errno === 1062) {
        responseHandlers.error(
          res,
          400,
          `Duplicate entry for category with name ${categoryName} not allowed`
        );
      } else {
        responseHandlers.error(
          res,
          500,
          `Error occurred while creating category with name ${categoryName}`
        );
      }
    } else
      responseHandlers.success(
        res,
        201,
        `Successfully created category with name ${categoryName}`,
        data
      );
  });
};

exports.delete = (req, res) => {
  let categoryId = req.query.categoryid;

  console.log(
    `Initializing request to delete category with id ${categoryId}...`
  );

  // validate request
  if (!categoryId) {
    responseHandlers.error(res, null, "Request parameter(s) can not be empty");
    return;
  }

  let category = new Category(null, categoryId);

  category.delete(categoryId, (err, data) => {
    if (err) {
      if (err.code == 0) {
        responseHandlers.error(
          res,
          404,
          `Not found: Category with id ${categoryId}`
        );
      } else {
        responseHandlers.error(
          res,
          500,
          "Error occurred while deleting category"
        );
      }
    } else {
      responseHandlers.success(
        res,
        200,
        `Category with id ${categoryId} successfully deleted`,
        null
      );
    }
  });
};

exports.update = (req, res) => {
  console.log(
    `Initializing request to update category with id ${req.body.id}...`
  );

  // validate request
  if (!req.body) {
    responseHandlers.error(res, null, "Request body can not be empty");
    return;
  }

  if (!req.body.id) {
    responseHandlers.error(res, null, "Request body id not be empty");
    return;
  }

  let category = new Category(req.body);

  category.update(req.body, (err, data) => {
    if (err) {
      if (err.code == 0) {
        responseHandlers.error(
          res,
          404,
          `Not found: Category with id ${req.body.id}`
        );
      } else {
        responseHandlers.error(
          res,
          500,
          `Error occurred while deleting category with id ${req.body.id}`
        );
      }
    } else {
      responseHandlers.success(
        res,
        null,
        `Category with id ${req.body.id} successfully updated`,
        null
      );
    }
  });
};

exports.getAll = (req, res) => {
  console.log("Initializing request to get all categories...");

  Category.read((err, data) => {
    if (err) {
      responseHandlers.error(
        res,
        500,
        "Error occurred while retrieving all categories"
      );
    } else {
      responseHandlers.success(res, 200, "Success", data);
    }
  });
};
