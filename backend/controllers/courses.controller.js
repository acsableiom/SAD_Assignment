const db = require("../models");
const coursesModel = require("../models/courses.model.js");
const courses = db.courses;

//List all courses in database
const listCourse = (req, res)=>
{
    coursesModel.Find().then(courses => res.json(courses)).catch(err => res.status(400).json('error ' + err));
}

//Find courses by ID
const findCourse = (req, res)=>
{
    coursesModel.FindById(req.params.id).then(courses => res.json(courses)).catch(err => res.status(400).json('error ' + err));
}

//adds a course and its details to the database
const addCourse = (req, res)=>
{
    const coursename = req.body.coursename;

    const addNewCourse = new coursesModel({});

    addNewCourse.save();
}

//updates a courses details after first being found
const updateCourse = (req, res)=>
{
    coursesModel.FindById(req,params,id).then(course => 
        {
            course.coursename = req.body.coursename;
            course.save().then(() => res.json('course details updated successfuly'))
            .catch(err => res.status(400).json('error code ') + err);
        })     
}

//deletes and course and all its details from the database
const deleteCourse = (req, res)=>
{
    coursesModel.findByIdAndDelete(req.params.id)
    .then(() => res.json("course " + req.params.id + " deleted from database."))
    .catch(err => res.status(400).json('error ' + err));
}

//exports functions to be used in the route
module.exports = {listCourse, findCourse, addCourse, updateCourse, deleteCourse}