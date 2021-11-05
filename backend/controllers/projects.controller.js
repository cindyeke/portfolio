const Project = require("../models/project.model");
const responseHandlers = require("../handlers/response");

exports.create = (req, res) => {
  console.log(
    `Initializing request to create new projects for category ${req.body.category} ...`
  );

  // validate request
  if (!req.body) {
    responseHandlers.error(res, null, "Request body can not be empty");
    return;
  }

  let newProject = new Project(
    req.body.name,
    req.body.description,
    req.body.code,
    req.body.website,
    req.body.category
  );

  Project.create(newProject, (err, data) => {
    if (err) {
      responseHandlers.error(res, 500, "Error occurred while creating project");
    } else {
      responseHandlers.success(
        res,
        200,
        "Successfully created new project",
        data
      );
    }
  });
};

exports.getAll = (req, res) => {
  console.log(`Initializing request to get all projects`);

  Project.getAll((err, data) => {
    if (err) {
      responseHandlers.error(
        res,
        500,
        `Error occurred while fetching projects`
      );
    } else {
      responseHandlers.success(res, 200, "Success", data);
    }
  });
};

exports.getAllById = (req, res) => {
  console.log(
    `Initializing request to get projects under category ${req.params.categoryid}`
  );

  let categoryId = req.params.categoryid;

  // validate request
  if (!categoryId) {
    responseHandlers.error(res, null, "Request parameter(s) can not be empty");
    return;
  }

  Project.read(categoryId, (err, data) => {
    if (err) {
      responseHandlers.error(
        res,
        500,
        `Error occurred while fetching projects under category id ${categoryId}`
      );
    } else {
      responseHandlers.success(res, 200, "Success", data);
    }
  });
};

exports.delete = (req, res) => {
  let projectId = req.query.projectid;

  console.log(
    `Initializing request to delete category with id ${projectId}...`
  );

  // validate request
  if (!projectId) {
    responseHandlers.error(res, null, "Request parameter(s) can not be empty");
    return;
  }

  Project.delete(projectId, (err, data) => {
    if (err) {
      if (err.code == 0) {
        responseHandlers.error(
          res,
          404,
          `Not found: Project with id ${projectId}`
        );
      } else {
        responseHandlers.error(
          res,
          500,
          `Error occurred while deleting project with id ${projectId}`
        );
      }
    } else {
      responseHandlers.success(
        res,
        200,
        `Project with id ${projectId} successfully deleted`,
        null
      );
    }
  });
};

exports.update = (req, res) => {
  let projectId = req.body.id;

  console.log(`Initializing request to update project with id ${projectId}...`);

  // validate request
  if (!req.body) {
    responseHandlers.error(res, null, "Request parameter(s) can not be empty");
    return;
  }

  let project = new Project(
    "",
    req.body.description,
    req.body.code,
    req.body.website
  );

  Project.update(project, projectId, (err, data) => {
    if (err) {
      if (err.code == 0) {
        responseHandlers.error(
          res,
          404,
          `Not found: Project with id ${projectId}`
        );
      } else {
        responseHandlers.error(
          res,
          500,
          `Error occurred while updating project with id ${projectId}`
        );
      }
    } else {
      responseHandlers.success(
        res,
        200,
        `Project with id ${projectId} successfully updated`,
        data
      );
    }
  });
};
