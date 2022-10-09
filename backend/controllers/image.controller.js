const db = require("../models");
const Image = db.image;
const Op = db.Sequelize.Op;

// Create and Save a new Bicycle
exports.create = (req, res) => {
  // Validate request
  if (!req.body.story || !req.body.group) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a image
  const imagein = {
    story: req.body.story,
    group: req.body.group,
    filename: req.file ? req.file.filename : ""
  }

  // Save Bicycle in the database
  Image.create(imagein).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the image"
    })
  });
};

// Retrieve all Bicycles from the database.
exports.findAll = (req, res) => {
  Image.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all image"
    })
  })
};

// Find a single Bicycle with an id
exports.findOne = (req, res) => {

}

// Update a Bicycle by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Bicycle with the specified id in the request
exports.delete = (req, res) => {
  Image.destroy({
    where: { id: id}
    
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Deleted successfully"
        });
      } else {
        res.send({
          message: `Cannot delete image with id:${id} not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Internal server error"
      });
    });
};