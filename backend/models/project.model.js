const sqlConnection = require("../models/db");

class Project {
  constructor(name, description, code, website, category) {
    this.name = name;
    this.description = description;
    this.code = code;
    this.website = website;
    this.category = category;
  }

  static create = (newProject, result) => {
    let sqlStatement =
      "INSERT INTO projects (name, description, code, website, category) VALUES(?)";

    let values = [
      newProject.name,
      newProject.description,
      newProject.code,
      newProject.website,
      newProject.category,
    ];

    sqlConnection.query(sqlStatement, [values], (err, res) => {
      if (err) {
        console.log("SQL Error: ", err);
        result(err, null);
        return;
      }

      console.log(
        `Successfully created project for category ${newProject.category}`
      );
      console.log(res);
      result(null, { id: res.insertId, ...newProject });
    });
  };

  static getAll = (result) => {
    let sqlStatement = "SELECT * FROM projects";

    sqlConnection.query(sqlStatement, (err, res) => {
      if (err) {
        console.log("SQL Error: ", err);
        result(err, null);
        return;
      }

      console.log("Projects: ", res);
      result(null, res);
    });
  };

  static read = (categoryId, result) => {
    let sqlStatement = "SELECT * FROM projects WHERE category=?";

    sqlConnection.query(sqlStatement, parseInt(categoryId), (err, res) => {
      if (err) {
        console.log("SQL Error: ", err);
        result(err, null);
        return;
      }

      console.log("Projects: ", res);
      result(null, res);
    });
  };

  static delete = (projectId, result) => {
    let sqlStatement = "DELETE FROM projects WHERE id=?";

    sqlConnection.query(sqlStatement, projectId, (err, res) => {
      if (err) {
        console.log("SQL Error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        console.log(`No project with id ${projectId} found`);
        result({ code: 0 }, null);
        return;
      }

      console.log(`Deleted project with id ${projectId}`);
      result(null, { id: projectId });
    });
  };

  static update = (project, projectId, result) => {
    let desc = project.description;
    let code = project.code;
    let site = project.website;

    let sqlStatement1 = "SELECT * FROM projects WHERE id=?";

    sqlConnection.query(sqlStatement1, projectId, (err, res) => {
      if (err) {
        console.log("SQL Error: ", err);
        result(null, err);
        return;
      }

      if (res.length === 0) {
        console.log(`No project with id ${projectId} found`);
        result({ code: 0 }, null);
        return;
      }

      let sqlStatement2 =
        "UPDATE projects SET description = ?, code = ?, website = ? WHERE id = ?";
      let values = [desc, code, site, projectId];
      sqlConnection.query(sqlStatement2, values, (err, res) => {
        if (err) {
          console.log("SQL Error: ", err);
          result(null, err);
          return;
        }

        console.log(`Project with id ${projectId} successfully updated`);
        result(null, {
          id: projectId,
          name: project.name,
          description: desc,
          code: code,
          website: site,
        });
      });
    });
  };
}

module.exports = Project;
