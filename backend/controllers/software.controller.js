const db = require("../models");
const Software = db.software;
 
// Create and Save a new student
exports.create = (req, res) => {
 
};
 
// Retrieve all students from the database.
exports.findAll = (req, res) => {
 
};
 
// Find a single student with an id
exports.findOne = (req, res) => {
 
};
 
// Update a student by the id in the request
exports.update = (req, res) => {
 
};
 
// Delete a student with the specified id in the request
exports.delete = (req, res) => {
 
};
 
// Delete all students from the database.
exports.deleteAll = (req, res) => {
 
};

// Create and Save a new Software
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    
    // Create a Student model object
    const software = new Software({
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      present: req.body.present
    });
    
    // Save Student in the database
    software
      .save()
      .then(data => {
        console.log("Student saved in the database: " + data);
        res.redirect('/courses/software');
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Student."
        });
      });
   };
   
// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    //We use req.query.id to get query string from the Request and consider it as condition for findAll() method.
    var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
     Software
      .find(condition)
      .then(data => {
         res.render('software',
             {title: 'Software Course',
              software: data});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving software."
        });
      });
   };
   