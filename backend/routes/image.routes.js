module.exports = app => {
  const image = require("../controllers/image.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Bicycle
  // DECOMMENT:
  router.post("/", upload.single('file'), image.create);

  // Retrieve all Bicycles
  router.get("/", image.findAll);

  // Retrieve a single Bicycle with id
  router.get("/:id", image.findOne);

  // Update a Bicycle with id
  router.put("/:id", image.update);

  // Delete a Bicycle with id
  router.delete("/:id", image.delete);

  app.use("/api/image", router);
}