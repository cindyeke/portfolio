const sqlConnection = require("../models/db");

class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  // Create Category Method
  create = (categoryName, result) => {
    let sqlStatement = "INSERT INTO categories (category_name) VALUES (?)";
    sqlConnection.query(sqlStatement, categoryName, (err, res) => {
      if (err) {
        console.log("SQL Error: ", err);
        result(err, null);
        return;
      }

      result(null, { id: res.insertId, name: categoryName });
    });
  };

  //Delete Category
  delete = (categoryId, result) => {
    let sqlStatement = "DELETE FROM categories WHERE category_id = ?";

    sqlConnection.query(sqlStatement, parseInt(categoryId), (err, res) => {
      if (err) {
        console.log("SQL Error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        console.log(`No category with ${categoryId} found`);
        result({ code: 0 }, null);
        return;
      }

      console.log(`Deleted category with id ${categoryId}`);
      result(null, { id: categoryId });
    });
  };

  update = (category, result) => {
    let sqlStatement =
      "UPDATE categories SET category_name = ? WHERE category_id = ?";
    let values = [category.name, parseInt(category.id)];

    sqlConnection.query(sqlStatement, values, (err, res) => {
      if (err) {
        console.log("SQL Error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        console.log(`No category with ${category.id} found`);
        result({ code: 0 }, null);
        return;
      }

      console.log(`Category with ${category.id} successfully updated`);
      result(null, { id: category.id, name: category.name });
    });
  };

  static read = (result) => {
    let sqlStatement = "SELECT * FROM categories";

    sqlConnection.query(sqlStatement, (err, res) => {
      if (err) {
        console.log("SQL Error: ", err);
        result(null, err);
        return;
      }

      console.log("Categories: ", res);
      result(null, res);
    });
  };
}

module.exports = Category;
