const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projects.controller");
const categoryController = require("../controllers/categories.controller");

router.get("/categories", categoryController.getAll);
router.get("/projects", projectController.getAll);
router.get("/projects/:categoryid", projectController.getAllById);

router.post("/categories", categoryController.create);
router.post("/projects", projectController.create);

router.put("/categories", categoryController.update);
router.put("/projects", projectController.update);

router.delete("/categories", categoryController.delete);
router.delete("/projects", projectController.delete);

module.exports = router;
