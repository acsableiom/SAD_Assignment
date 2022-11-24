var express = require('express');
var router = express.Router();
 
//Require controller
var softwareController = require('../controllers/software.controller');

// GET at the root returns a welcome message in json
router.get('/', function(req, res, next) {
 res.json({message: "Welcome to the courses api."});
});
 
// Create a new software
router.post("/software/", softwareController.create);
 
// Retrieve all software
router.get("/software/", softwareController.findAll);
 
// Retrieve a single software with id
router.get("/software/:id", softwareController.findOne);
 
// Update a software with id
router.put("/software/:id", softwareController.update);
 
// Delete a software with id
router.delete("/software/:id", softwareController.delete);
 
// Delete all software of the database
router.delete("/software/", softwareController.deleteAll);
 
module.exports = router;
